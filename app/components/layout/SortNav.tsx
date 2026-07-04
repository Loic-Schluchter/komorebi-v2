'use client'

const sortOptions = ["Region", "A-Z", "Warmest"]


interface SProps{
    selectedSort: string,
    setSelectedSort: (sort: string) => void,
}


function SortNav({selectedSort, setSelectedSort} : SProps) {
    return (
        <div className="flex gap-4 items-center mt-6 text-komorebi-ivory font-serif w-full italic">
            <h2 className="font-sans not-italic">SORT</h2>
            {sortOptions.map((option, index) => (
                <nav key={index} >
                    <button
                        onClick={() => setSelectedSort(option)}
                        className={option === selectedSort ? "text-komorebi-gold" : "text-[#d9cfb8]"}
                    >
                        {option}
                    </button>
                </nav>
            ))}
        </div>
    )
}

export default SortNav
