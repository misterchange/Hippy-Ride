import React from 'react'
import avatarman from '../assets/avatarman.png'
import hippyridelogo from '../assets/hippyridelogo.png'
import Image from 'next/dist/client/image'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'


const style={
    wrapper:`h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu:`flex gap-3 `,
    logoContainer:`h-30 w-30  object-cover cursor-container`,
    logoImage:`h-10 w-10 mr-4 rounded-full p-px object-cover cursor-container`,
    logo:`text-3xl text-green-500 flex cursor-pointer mr-16`,
    menuItem:`text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    rightMenu:`flex gap-3 items-center`,
    userImageContainer:`mr-5`,
    userImage:`h-10 w-10 mr-4 rounded-full p-px object-cover cursor-container`,
    loginButton:`flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1 `,
    loginText:`ml-2`,
}



const Navbar = () => {
    const { currentAccount, connectWallet, currentUser } = useContext(UberContext)

    console.log(currentUser)

  return (
    <div className={style.wrapper}>
        <div className={style.leftMenu}>
        {/* <div className={style.userImageContainer}><Image className={style.userImage} src={hippyridelogo} width={40} height={40} /></div> */}
        <div className={style.logo}>Ridez</div>
            <div className={style.menuItem}>Ride</div>
            <div className={style.menuItem}>Drive</div>
            <div className={style.menuItem}>More</div>    
        </div>
        <div className={style.rightMenu}>
            <div className={style.menuItem}>Help</div>
            <div className={style.menuItem}>
                {currentUser.name?.split(' ')[0]}
                </div>
            <div className={style.userImageContainer}><Image className={style.userImage} src={avatarman} width={40} height={40} /></div>
            {currentAccount ?
            (<div>
                {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
            </div>):(
                <div className={style.loginButton} onClick={() => connectWallet()}>
                    <BsPerson/>
                    <span className={style.loginText}>Log in</span>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar