import "dotenv/config";

import { createClient } from "@supabase/supabase-js";
import { cities } from "@/app/lib/cities";


const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function run() {
    const { error } = await supabase.from("cities").insert(
        cities.map((city) => ({
            slug: city.slug,
            name: city.name,
            japanese_name: city.japaneseName,
            theme: city.theme ?? null,
            image: city.image,
            description: city.description,
            island: city.island,
            region: city.region,
            catchphrase: city.catchphrase,
            type: city.type,
            best_months: city.bestMonths,
        }))
    );

    if (error) {
        console.error(error);
    } else {
        console.log("Import terminé !");
    }
}

run();