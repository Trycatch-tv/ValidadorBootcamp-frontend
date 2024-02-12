type TitleProps = {
    title: string
    customClass?: string
}
const Title = ({ title, customClass }: TitleProps) => {
    return (<h3 className={`w-fit relative font-bold xl:text-3xl md:text-4xl text-2xl after:h-2 after:bg-background-maize  ${customClass ? customClass : "after:w-full"} after:block after:absolute after:bottom-2 after:-z-1 `}>
        {title}
    </h3>);
}

export default Title;