import React from 'react'
import { Switch, Route } from "react-router-dom";
import News from './Components/News/News'
import Raid from './Components/Raid/Raid'
import Recruitment from './Components/Recruitment/Recruitment'
import Contact from './Components/Contact/Contact'
import Podcast from './Components/Podcast/Podcast'

export default(
    <Switch>
        <Route exact path='/' component={News} />
        <Route path='/raid' component={Raid} />
        <Route path='/recruitment' component={Recruitment} />
        <Route path='/contact' component={Contact} />
        <Route path='/podcast' component={Podcast} />
    </Switch>
)