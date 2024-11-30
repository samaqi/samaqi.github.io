import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const imagePaths = [
    '/img/sprint_images/Balamb_Garden.jpg',
    '/img/sprint_images/Fishermans_Horizon.jpg',
    '/img/sprint_images/Dont_Be_Afraid.jpg',
    '/img/sprint_images/Ride_On.jpg',
    '/img/sprint_images/Where_I_Belong.jpg',
    '/img/sprint_images/Eyes_On_Me.jpg',
    '/img/sprint_images/The_Successor.jpg',
    '/img/sprint_images/Maybe_Im_a_Lion.jpg',
    '/img/sprint_images/The_Extreme.jpg',
    '/img/sprint_images/The_Castle.jpg',
    '/img/sprint_images/Compression_of_Time.jpg',
];

const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. -- Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. -- Dalai Lama",
    "Life is what happens when you're busy making other plans. -- John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -- Winston Churchill",
    "In the end, it's not the years in your life that count. It's the life in your years. -- Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -- Nelson Mandela",
    "The only way to do great work is to love what you do. -- Steve Jobs",
    "The best way to predict the future is to create it. -- Peter Drucker",
    "The future belongs to those who believe in the beauty of their dreams. -- Eleanor Roosevelt",
    "The only thing we have to fear is fear itself. -- Franklin D. Roosevelt",
    "The journey of a thousand miles begins with one step. -- Lao Tzu",
    "Believe you can and you're halfway there. -- Theodore Roosevelt",
    "The secret of getting ahead is getting started. -- Mark Twain",
    "The only person you are destined to become is the person you decide to be. -- Ralph Waldo Emerson",
    "The best time to plant a tree was 20 years ago. The second best time is now. -- Chinese Proverb",
    "The future depends on what you do today. -- Mahatma Gandhi",
    "The only true wisdom is in knowing you know nothing. -- Socrates",
    "The greatest wealth is to live content with little. -- Plato",
    "The only thing worse than being blind is having sight but no vision. -- Helen Keller",
    "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it. -- Michelangelo",
];

const prompts = {
    thriller: "Write a story about a detective who uncovers a dark secret.",
    romance: "Write a love story set in a small town.",
    action: "Write an action-packed adventure involving a heist.",
    drama: "Write a dramatic story about a family reunion.",
    angst: "Write a story about a character dealing with inner turmoil.",
    humor: "Write a funny story about a day in the life of a comedian.",
    historical: "Write a historical fiction set during the Renaissance.",
    fantasy: "Write a fantasy story about a quest for a magical artifact.",
    sciFi: "Write a science fiction story set in a futuristic world.",
    mystery: "Write a mystery novel with a twist ending.",
    horror: "Write a horror story about a haunted house.",
    adventure: "Write an adventure story set in the wilderness.",
    comingOfAge: "Write a coming-of-age story about a teenager's journey to self-discovery.",
    supernatural: "Write a story about supernatural beings living among humans.",
    thriller: "Write a psychological thriller about a serial killer on the loose.",
    comedy: "Write a comedy screenplay about a group of friends on a road trip.",
    tragedy: "Write a tragic story about star-crossed lovers.",
    historicalRomance: "Write a historical romance set in ancient Rome.",
    dystopian: "Write a dystopian novel set in a post-apocalyptic world.",
    western: "Write a western story about a gunslinger seeking redemption.",
    selfDiscovery: "Write a story about Squall and his journey to find his true purpose.",
    romance: "Write a romantic story about Rinoa and Squall.",
    action: "Write a story about Seifer and his quest for power.",
    leadership: "Write a story about Quistis and her role as a mentor.",
    adventure: "Write a story about Selphie and her adventures.",
    action: "Write a story about Irvine and his involvement in a dangerous mission.",
    friendship: "Write a story about Xu and her leadership skills.",
    historical: "Write a story about Cid and his inventions.",
    supernatural: "Write a story about Edea and her hidden agenda.",
    fantasy: "Write a story about Ultimecia and her plans for domination.",
    selfDiscovery: "Write a story about Zell and his pursuit of his dreams outside Garden.",
    courage: "Write a story about Squall facing his deepest fears.",
    reunion: "Write a story about Rinoa and Squall reuniting after a long separation.",
    rivalry: "Write a story about Seifer and Squall's ongoing rivalry.",
    guidance: "Write a story about Quistis guiding a new student.",
    exploration: "Write a story about Selphie exploring a mysterious island.",
    redemption: "Write a story about Irvine seeking redemption for past mistakes.",
    teamwork: "Write a story about Squall and his friends working together to overcome a challenge.",
    innovation: "Write a story about Cid creating a groundbreaking invention.",
    mystery: "Write a story about Edea uncovering a hidden secret.",
    destiny: "Write a story about Ultimecia's rise to power.",
    growth: "Write a story about Zell's personal growth and development.",
    adventure: "Write a story about Squall and Zell embarking on a thrilling adventure.",
    sacrifice: "Write a story about Rinoa making a great sacrifice for her friends.",
    betrayal: "Write a story about Seifer dealing with betrayal from someone he trusts.",
    wisdom: "Write a story about Quistis imparting wisdom to her students.",
    discovery: "Write a story about Selphie discovering an ancient artifact.",
    loyalty: "Write a story about Irvine proving his loyalty to his team.",
    strategy: "Write a story about Squall devising a strategy to defeat a powerful enemy.",
    legacy: "Write a story about Cid's legacy and its impact on future generations.",
    prophecy: "Write a story about Edea fulfilling an ancient prophecy.",
    ambition: "Write a story about Ultimecia's ambitious plans for the future.",
    determination: "Write a story about Zell's determination to achieve his goals.",
};

const sceneSuggestions = [
    "A bustling city street during rush hour",
    "A secluded cabin in the woods",
    "A futuristic space station",
    "A quaint cafe in a small village",
    "A busy airport terminal",
    "A creepy abandoned mansion",
    "A vibrant marketplace in a foreign country",
    "A serene beach at sunset",
    "A chaotic battlefield during a war",
    "A cozy library filled with ancient books",
    "A high-tech laboratory",
    "A mystical forest with talking animals",
    "A grand ballroom in a luxurious palace",
    "A desolate desert landscape",
    "A bustling kitchen in a busy restaurant",
    "A secret underground hideout",
    "A picturesque garden in bloom",
    "A crowded concert venue",
    "A spooky graveyard at midnight",
    "A serene mountaintop with breathtaking views",
    "A bustling train station during rush hour",
    "A magical underwater kingdom",
    "A dimly lit jazz club",
    "A futuristic cityscape with flying cars",
    "A charming countryside cottage",
    "A haunted carnival at midnight",
    "A glamorous red carpet event",
    "A peaceful monastery in the mountains",
    "A thrilling race track",
    "A mysterious ancient temple",
    "A cozy fireplace in a log cabin",
    "A bustling market filled with exotic spices",
    "A futuristic courtroom",
    "A hidden treasure cave",
    "A tranquil lakeside retreat",
    "A chaotic music festival",
    "A spooky haunted forest",
    "A luxurious penthouse suite",
    "A charming vineyard in the countryside",
    "A bustling office building",
    "A magical castle in the clouds",
    "A lively dance club",
    "A remote island paradise",
    "A thrilling amusement park",
    "A mystical realm of fairies and mythical creatures",
    "A bustling sports stadium",
    "A mysterious underground tunnel system",
    "A serene zen garden",
    "A futuristic virtual reality world",
    "A charming bed and breakfast in a small town",
    "A haunted shipwreck on a deserted island",
    "A bustling film set",
    "A hidden speakeasy during the Prohibition era",
    "A peaceful yoga retreat in the mountains",
    "A thrilling car chase through city streets",
    "A mysterious time-traveling device",
    "A cozy coffee shop on a rainy day",
    "A haunted asylum with a dark past",
    "A glamorous casino in Las Vegas",
    "A tranquil waterfall in the middle of a lush forest",
    "A bustling shopping mall during the holiday season",
    "A futuristic robot factory",
    "A charming seaside town",
    "A spooky ghost town in the Wild West",
    "A luxurious cruise ship on the open sea",
    "A thrilling rooftop chase in a big city",
    "A hidden underground city",
    "A peaceful orchard in the countryside",
    "A bustling concert hall during a symphony performance",
    "A mysterious ancient artifact with magical powers",
    "A cozy bookstore filled with rare and ancient books",
    "A haunted hotel with a dark secret",
    "A glamorous fashion show runway",
    "A tranquil bamboo forest",
    "A futuristic flying car race",
    "A charming ice cream parlor on a hot summer day",
    "A spooky graveyard filled with restless spirits",
    "A bustling art gallery opening",
    "A hidden treasure map with clues to a fortune",
    "A peaceful lakeside cabin",
    "A thrilling bank heist",
    "A mysterious secret society with hidden agendas",
    "A cozy log cabin in the snowy mountains",
    "A haunted carnival with creepy clowns",
    "A glamorous red carpet event",
    "A tranquil lakeside retreat",
    "A chaotic music festival",
    "A spooky haunted forest",
    "A luxurious penthouse suite",
    "A charming vineyard in the countryside",
    "A bustling office building",
    "A magical castle in the clouds",
    "A lively dance club",
    "A remote island paradise",
    "A thrilling amusement park",
    "A mystical realm of fairies and mythical creatures",
    "A bustling sports stadium",
    "A mysterious underground tunnel system",
    "A serene zen garden",
    "A futuristic virtual reality world",
    "A charming bed and breakfast in a small town",
    "A haunted shipwreck on a deserted island",
    "A bustling film set",
    "A hidden speakeasy during the Prohibition era",
    "A peaceful yoga retreat in the mountains",
    "A thrilling car chase through city streets",
    "A mysterious time-traveling device",
    "A cozy coffee shop on a rainy day",
    "A haunted asylum with a dark past",
    "A glamorous casino in Las Vegas",
    "A tranquil waterfall in the middle of a lush forest",
    "A bustling shopping mall during the holiday season",
    "A futuristic robot factory",
    "A charming seaside town",
    "A spooky ghost town in the Wild West",
    "A luxurious cruise ship on the open sea",
    "A thrilling rooftop chase in a big city",
    "A hidden underground city",
    "A peaceful orchard in the countryside",
    "A bustling concert hall during a symphony performance",
    "A mysterious ancient artifact with magical powers",
    "A cozy bookstore filled with rare and ancient books",
    "A haunted hotel with a dark secret",
    "A glamorous fashion show runway",
    "A tranquil bamboo forest",
    "A futuristic flying car race",
    "A charming ice cream parlor on a hot summer day",
    "A spooky graveyard filled with restless spirits",
    "A bustling art gallery opening",
    "A hidden treasure map with clues to a fortune",
    "A peaceful lakeside cabin",
    "A thrilling bank heist",
    "A mysterious secret society with hidden agendas",
    "A cozy log cabin in the snowy mountains",
    "A haunted carnival with creepy clowns",
];



const getRandomItem = (list) => list[Math.floor(Math.random() * list.length)];

const Prompts = () => {
    const [image, setImage] = useState('');
    const [quote, setQuote] = useState('');
    const [prompt, setPrompt] = useState('');
    const [scene, setScene] = useState('');

    const generatePrompt = () => {
        setImage(getRandomItem(imagePaths));
        setQuote(getRandomItem(quotes));
        setPrompt(getRandomItem(Object.values(prompts)));
        setScene(getRandomItem(sceneSuggestions));
    };

    useEffect(() => {
        generatePrompt();
    }, []);

    return (
        <Card style={{ position: 'relative', height: '600px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <CardContent style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '1rem', borderRadius: '8px', color: 'black' }}>
                    <Typography variant="body" component="p" style={{ fontStyle: 'italic' }}>
                        {quote}
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Typography variant="body1" component="p">
                            Prompt: {prompt}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Scene Suggestion: {scene}
                        </Typography>
                    </Box>
                </Box>
                <Button variant="contained" color="primary" onClick={generatePrompt} style={{ marginTop: '1rem', alignSelf: 'center' }}>
                    Generate New Prompt
                </Button>
            </CardContent>
        </Card>
    );
};

export default Prompts;