import moon from "./images/image-moon.png";
import mars from "./images/image-mars.png";
import europa from './images/image-europa.png';
import titan from './images/image-titan.png';


export const DESTINATIONS = [
    {
        image: moon,
        id: "moon",
        title: "MOON",
        text: `See our planet as you’ve never seen it before. A perfect relaxing
        trip away to help regain perspective and come back refreshed. While
        you’re there, take in some history by visiting the Luna 2 and Apollo
        11 landing sites.`,
        distance: "384,400",
        timeToTravel: "3"
    },
    {
        image: mars,
        id: "mars",
        title: "MARS",
        text: `Don’t forget to pack your hiking boots. You’ll need them to
        tackle Olympus Mons, the tallest planetary mountain in our solar
        system. It’s two and a half times the size of Everest!`,
        distance: "225 MIL.",
        timeToTravel: "273.75"
    },
    {
        image: europa,
        id: "europa",
        title: "EUROPA",
        text: `The smallest of the four Galilean moons orbiting Jupiter, 
        Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, 
        curling, hockey, or simple relaxation in your snug wintery cabin.`,
        distance: "628 MIL.",
        timeToTravel: "1095"
    },
    {
        image: titan,
        id: "titan",
        title: "TITAN",
        text: `The only moon known to have a dense 
        atmosphere other than Earth, Titan is a home away from home 
        (just a few hundred degrees colder!). 
        As a bonus, you get striking views of the Rings of Saturn.`,
        distance: "1.6 BIL.",
        timeToTravel: "1095"
    }
]