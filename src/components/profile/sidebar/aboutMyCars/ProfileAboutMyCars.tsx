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
  const { user } = useAppSelector(state => state.userSlice)
  const { user: authUser } = useAppSelector(state => state.authSlice)

  const [show, setShow] = React.useState(false)

  // const { data, isLoading } = api.useGetProfileQuery(null, {
  //   skip: !user,
  // })

  return (
    <div>
      <div>
        <Typography type={'h1'}>My cars</Typography>
        <div className={'flex flex-col gap-5'}>
          {user?.cars.length === 0 ? (
            <>
              {user.id === authUser.id ? (
                <Typography type={'Ag-16-regular'} className={'m-2'}>
                  Please add your car ...
                </Typography>
              ) : (
                <Typography type={'Ag-16-regular'} className={'m-2'}>
                  User do not have car
                </Typography>
              )}
            </>
          ) : (
            user?.cars.map((car: ICar) => <CarCard car={car} key={car.id} />)
          )}
          {user?.id === authUser?.id && (
            <>
              <ButtonAuth onClick={() => setShow(true)}>
                Add car <AiOutlinePlus className='ml-2' size={28} />
              </ButtonAuth>
              <BasicModalScreen active={show} setActive={() => setShow(false)}>
                <AddNewCarForm />
              </BasicModalScreen>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileAboutMyCars
