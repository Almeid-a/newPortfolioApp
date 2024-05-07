import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/home';
import Projects from './pages/projetos';
import Certificates from './pages/certificados';

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#151C2E',
                    borderTopWidth: 0,
                    height: 45
                },
                tabBarLabelStyle: {
                    color: 'white',
                    marginBottom: 2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={25}
                            color={focused ? '#A855F7' : 'white'}
                        />
                    ),
                }}
            />
             <Tab.Screen
                name="Projetos"
                component={Projects}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'code' : 'code-slash-outline'}
                            size={25}
                            color={focused ? '#A855F7' : 'white'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Certificados"
                component={Certificates}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'school' : 'school-outline'}
                            size={25}
                            color={focused ? '#A855F7' : 'white'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
