import Image from "next/image"
import devLinks from '../../public/images/devlinks.svg'
import solarLink from '../../public/images/solar_link-circle-bold.png'


const FormLogo = () => {
  return (
    <>
        <h1 className="md:text-center flex items-center md:justify-center"><Image alt='' src={solarLink} /><Image alt='' src={devLinks} /></h1>
    </>
  )
}

export default FormLogo