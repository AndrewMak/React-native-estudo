import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireto'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import Flex from './componentes/Flex'
import FlexList from './componentes/FlexList'

export default createDrawerNavigator({
    FlexList: { 
        screen:() => <FlexList/>
    },
    TextoSincronizado: {
        screen:() => <TextoSincronizado/>
    },
    Flex: {
        screen:() => <Flex/>
    },
    ComunicacaoDireto:{
        screen:() => <Avo nome='Joao' sobrenome='Silva'/>
    },
    Evento:{
        screen:() => <Evento/>
    },
    ValidarProps:{
        screen:() => <ValidarProps ano={18}/>
    },
    Contador:{
        screen: () => <Contador numeroinicial={1000}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
}
}, { drawerWidth: 300 })