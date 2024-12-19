



export function Button({ link, text }) {
    return (
        <button onClick={link} className=" flex flex-row justify-center items-center w-64 h-12 font-poppins bg-[#5C9761] rounded-lg text-center text-white">
        {text}
        </button>
    );
}