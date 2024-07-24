interface head{
    title: string,
    paragraph: string,
}

const FormFooter = ({title, paragraph}: head) => {
  return (
    <div className="text-center text-[16px] leading-[150%] font-[400] md:flex md:justify-center md:gap-1">
        <h2 className="text-Grey">{title}</h2>
        <p className="text-Purple">{paragraph}</p>
    </div>
  )
}

export default FormFooter