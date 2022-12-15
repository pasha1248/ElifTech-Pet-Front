/** @format */
// @ts-nocheck
import React from 'react'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import { api } from '../../../../state/api-rtk/api-rtk'
import { ICar } from '../../../../state/type/car.interface'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'
import { Typography } from '../../../../ui/Typography/Typography'
import CarCard from '../../../car/car-card/CarCard'
import { AiOutlinePlus } from 'react-icons/ai'

// @ts-ignore:next-line
import styles from './ProfileAboutMyCars.module.scss'
import BasicModalScreen from '../../../../ui/modal/BasicModalScreen'
import { useOutside } from '../../../../hooks/useOutside'
import AddNewCarForm from './AddNewCarForm'
import axios from 'axios'
import { carSelectServise } from '../../../../services/car/carSelect.service'

interface Props {}

const ProfileAboutMyCars = (props: Props) => {
  const { user } = useAppSelector(
    (state: { authSlice: any }) => state.authSlice
  )

  const [show, setShow] = React.useState(false)

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })
  var model = 'camry'

  return (
    <div>
      <div>
        <Typography type={'h1'}>My cars</Typography>
        <div className={'flex flex-col gap-5'}>
          {data?.cars.length === 0 ? (
            <>
              <Typography type={'Ag-16-regular'} className={'m-2'}>
                Please add your car ...
              </Typography>
              <ButtonAuth onClick={() => setShow(true)}>
                Add car <AiOutlinePlus className='ml-2' size={28} />
              </ButtonAuth>

              <BasicModalScreen active={show} setActive={() => setShow(false)}>
                <AddNewCarForm />
              </BasicModalScreen>
            </>
          ) : (
            data?.cars.map((car: ICar) => <CarCard car={car} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileAboutMyCars
