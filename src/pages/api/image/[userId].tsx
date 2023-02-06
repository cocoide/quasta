
import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from '../../../libs/middlewares/with-methods';
import { decode } from 'base64-arraybuffer';
import { nanoid } from 'nanoid';
import { supabase } from '../../../libs/supabase';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query

    if (req.method === "POST") {
        let image = req.body;
        if (!image) {
            return res.status(500).json({ message: 'No image provided' });
        }
        try {
            const contentType = image.match(/data:(.*);base64/)?.[1];
            const base64FileData = image.split('base64,')?.[1];
            if (!contentType || !base64FileData) {
                return res.status(500).json({ message: 'Image data not valid' });
            };
            const fileName = nanoid();
            const ext = contentType.split('/')[1];
            const path = `${fileName}.${ext}`;

            const { data, error: uploadError } = await supabase.storage
                .from(process.env.SUPABASE_BUCKET as string)
                .upload(path, decode(base64FileData), {
                    contentType,
                    upsert: true,
                });
            if (uploadError) {
                throw new Error('Unable to upload image to storage');
            }
            const DB_URL = process.env.SUPABASE_UR as string
            const url = `${DB_URL.replace(
                '.co',
                'in',
            )}/storage/v1/object/public/${userId}/${data.path}`;
            return res.status(200).json({ url });
        } catch (e) {
            return res.status(500).json({ error: "Server error happened" });
        }
    }
}

export default withMethods(["POST", "GET"], handler) 