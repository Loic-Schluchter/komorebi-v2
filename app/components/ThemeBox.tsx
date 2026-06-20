import {Theme} from "@/app/lib/theme";


function ThemeBox({filtredTheme}: { filtredTheme: Theme}) {
    return (
        <section className="text-komorebi-ivory">
            <div className="flex font-serif items-baseline gap-4">
                <p className="text-komorebi-gold italic text-2xl">01</p>
                <h2 className="text-2xl italic ">
                    Good to know
                </h2>
                <div className="flex-1 border-t border-komorebi-gold/30" />
                <span className="text-[0.8rem] uppercase tracking-[0.25em] font-bold text-komorebi-ivory">
        Before you go
    </span>
            </div>
            <div className="grid grid-cols-2 mt-4 border border-komorebi-gold rounded-2xl overflow-hidden divide-x divide-y divide-komorebi-gold/20">
                {filtredTheme.infos.map((info) => (
                    <div
                        key={info.label}
                        className="flex flex-col gap-2 p-4  font-serif"
                    >
                        <h3 className=" text-xl">
                            {info.label}
                        </h3>
                        <p className="font-bold italic text-xl">{info.value}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ThemeBox
