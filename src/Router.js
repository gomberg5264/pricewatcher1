    import React, {useEffect, Suspense} from 'react'
    import {BrowserRouter, Switch, Route} from 'react-router-dom'
    import './components/App.css'
    import watcherService from './services/watcher'
    import { useDispatch } from 'react-redux'
    import {setUser, setLoggedIn} from './reducers/userReducer'
    const SingleWatcher = React.lazy(() => import('./components/SingleWatcher'))
    const Login = React.lazy(() => import('./components/Login'))
    const Signup = React.lazy(() => import('./components/Signup'))
    const App = React.lazy(() => import('./components/App'))
    const AllWatchers = React.lazy(() => import('./components/AllWatchers'))



    export default function Router() {
      const dispatch = useDispatch()
      useEffect(() => {
        console.log('router')
        const user = window.localStorage.getItem('userlogged')
        if(user){
          const userdata = JSON.parse(user)
          // console.log(userdata)
          watcherService.setToken(userdata.token)
          dispatch(setUser(userdata.userInfo))
          dispatch(setLoggedIn())
        }
      }, [dispatch])

      return (
        <div className='container' >
          <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={App} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/watchers' component={AllWatchers} />
              <Route path='/singleWatcher' component={SingleWatcher} />
            </Switch>
          </BrowserRouter>
          </Suspense>
        </div>
      )
    }
