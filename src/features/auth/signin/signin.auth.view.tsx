import { Button, Input } from '@/components/ui'
import { Eye, EyeOff } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    showPassword: boolean
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
}
const SigninView:FC<Props> = ({showPassword,setShowPassword}) => {
    return (
        <section>
            <div className='container container-lg pt-16  w-full mx-auto flex justify-center min-h-screen'>
                {/* container form para del login */}
                <div className='lg:flex-1 flex-col flex items-center justify-center'>
                    <div className='w-full'>
                        <div className='mb-16'>
                            <small className='text-gray-400 text-2xl'>Bienvenidos a</small>
                            <h2 className='text-4xl font-semibold max-w-md'>Validador de bootcamp </h2>
                        </div>
                        <form className='max-w-md  w-full'>
                            <div className='my-5'>
                                <label className='text-gray-700 text-xs font-semibold block my-1'>Usuario</label>
                                <Input type="email" placeholder="Enter your email" />
                            </div>
                            <div className='my-5'>
                                <label className='text-gray-700 text-xs font-semibold block my-1'>Contraseña</label>
                                <div className='flex border rounded-md items-center px-3'>
                                    <Input className='border-none px-0' type={ showPassword ? "text" :"password"} placeholder="Enter your password" />
                                    {
                                        showPassword ? (
                                            <Eye onClick={() => setShowPassword(!showPassword)} className='h-4 text-gray-500 cursor-pointer'/>
                                        ):(
                                            <EyeOff onClick={()=>setShowPassword(!showPassword)} className='h-4 text-gray-500 cursor-pointer'/>
                                        )
                                    } 
                                </div>
                            </div>
                            <div className='my-5'>
                                <Button className='w-full' >Inicia sesión</Button>
                            </div>
                            <div className='flex items-center justify-center gap-4 my-5'>
                                <span className='h-[2px] w-full bg-gray-200 my-1' />
                                <p className='text-gray-400 text-xs'>O</p>
                                <span className='h-[2px] w-full bg-gray-200 my-1' />
                            </div>
                            <Button className='w-full' variant={"outline"}>Continua con Google</Button>
                            <p className='text-xs mt-10 text-center'>No tienes una cuenta? <Link className='text-blue-500' to='#'>Registrate</Link></p>
                        </form>
                    </div>
                </div>

                {/* //container para el banner del login */}
                <div className='flex-1 hidden min-h-full   overflow-hidden lg:flex items-center justify-center'>
                    <div className='w-full h-full max-h-[500px] rounded-md overflow-hidden'>
                        {/* imagen ramdom */}
                        <img className='h-full w-full object-cover object-center transform rotate-6' src='https://source.unsplash.com/random/?learning' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SigninView
