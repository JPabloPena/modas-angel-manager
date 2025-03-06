import Sun from '../icons/Sun'

function Topbar () {
  return (
    <div className='w-full h-19 py-3 px-3 flex gap-2 justify-end'>
      <button className='group w-12 h-12 flex justify-center items-center rounded-full linear-gradient-blue hover:cursor-pointer hover:bg-primary hover:bg-none hover:opacity-100 transition-colors'>
        <Sun className='size-6 fill-tertiary group-hover:fill-accent' />
      </button>
      <div className='flex gap-3 pl-4 rounded-full linear-gradient-blue'>
        <div className='flex flex-col justify-center'>
          <span className='font-medium text-md leading-4 text-right text-primary'>Modas Angel</span>
          <span className='font-light text-sm text-right text-secondary'>Angela Penagos</span>
        </div>
        <img
          src='../../public/images/logo-modas-angel.jpg'
          alt='Logo de Modas Angel'
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Topbar
