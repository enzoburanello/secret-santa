export function CardName({add, name, remove}) {
    return (
       <section className=" w-64 h-16 flex flex-row justify-between items-center p-4">
        <div className="flex flex-row gap-[25px] items-center justify-center">
            <div className="w-[48px] h-[48px] bg-green-200 flex justify-center items-center "><img src="./assets/litle-gift.png" alt="" /></div>
            <h2 className="text-sm ">{name}</h2>
        </div>
        
        <button on>
            <img className="w-[48px] h-[48px]" src="./assets/trash.png" alt="" />
        </button>
       </section>
    );
}