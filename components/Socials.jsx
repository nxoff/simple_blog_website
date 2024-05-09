import Image from "next/image"

const Socials = () => {
  return (
    <div className="hamburger-menu-socials-container">
      <Image src={'/colored-socials/facebook-colored.svg'} width={48} height={48} alt="FB" />
      <Image src={'/colored-socials/instagram-colored.svg'} width={48} height={48} alt="IG" />
      <Image src={'/colored-socials/x-colored.svg'} width={48} height={48} alt="X" />
    </div>
  )
}

export default Socials
