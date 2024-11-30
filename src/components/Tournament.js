import React from "react";
import { SingleEliminationBracket, Match, SVGViewer } from '@g-loot/react-tournament-brackets';
import { useNavigate } from 'react-router-dom';

export default function Tournament({ matches }) {
    const navigate = useNavigate();

    const handleMatchClick = (match) => {
        // Navigate to the desired URL, for example, match details page
        console.log('Click match', match);
        navigate(`/match/${match.match.id}`);
    };

    return (
        <>
            <SingleEliminationBracket
                matches={matches}
                matchComponent={Match}
                svgWrapper={({ children, ...props }) => (
                    <SVGViewer width={1000} height={1000} {...props}>
                        {children}
                    </SVGViewer>
                )}
                onMatchClick={handleMatchClick}
            />
        </>
    );
}

// import React from "react";
// import {
//     Bracket,
//     BracketGame,
//     BracketGenerator
// } from "react-tournament-bracket";
// import { dataMap } from "./data";

// export default function Tournament() {
//     const game2 = {
//         id: "2",
//         name: "round 1",
//         scheduled: Number(new Date()),
//         sides: {
//             home: {
//                 team: {
//                     id: "12",
//                     name: "UserOne"
//                 },
//                 score: {
//                     score: 5
//                 }
//             },
//             visitor: {
//                 team: {
//                     id: "13",
//                     name: "UserFour"
//                 },
//                 score: {
//                     score: 5
//                 }
//             }
//         }
//     };
//     const game3 = {
//         id: "3",
//         name: "round 1",
//         scheduled: Number(new Date()),
//         sides: {
//             home: {
//                 team: {
//                     id: "11",
//                     name: "UserTwo"
//                 },
//                 score: {
//                     score: 5
//                 }
//             },
//             visitor: {
//                 team: {
//                     id: "12",
//                     name: "UserThree"
//                 },
//                 score: {
//                     score: 5
//                 }
//             }
//         }
//     };
//     const game1 = {
//         id: "1",
//         name: "semi-finals",
//         scheduled: Number(new Date()),
//         sides: {
//             home: {
//                 team: {
//                     id: "10",
//                     name: "UserOne"
//                 },
//                 score: {
//                     score: 5
//                 },
//                 seed: {
//                     displayName: "A1",
//                     rank: 1,
//                     sourceGame: game2,
//                     sourcePool: {}
//                 }
//             },
//             visitor: {
//                 team: {
//                     id: "11",
//                     name: "UserTwo"
//                 },
//                 score: {
//                     score: 5
//                 },
//                 seed: {
//                     displayName: "A2",
//                     rank: 1,
//                     sourceGame: game3,
//                     sourcePool: {}
//                 }
//             }
//         }
//     };

//     const game1Test = () => {
//         let rankOne = 0;
//         const findRounds1 = dataMap.filter((value) => value.stage === "round 1");
//         if (findRounds1.length !== 0) {
//             rankOne = 1;
//         }

//         const ttH = () => {
//             return {
//                 team: {
//                     id: "10",
//                     name: "UserOne"
//                 },
//                 score: {
//                     score: 5
//                 }
//             };
//         };
//         const ttV = () => {
//             return {
//                 team: {
//                     id: "11",
//                     name: "UserTwo"
//                 },
//                 score: {
//                     score: 5
//                 }
//             };
//         };
//         return {
//             id: "1",
//             name: "round 2",
//             scheduled: Number(new Date()),
//             sides: {
//                 home: {
//                     ...ttH(),
//                     seed: {
//                         displayName: "A1",
//                         rank: rankOne,
//                         sourceGame: game2,
//                         sourcePool: {}
//                     }
//                 },
//                 visitor: {
//                     ...ttV(),
//                     seed: {
//                         displayName: "A2",
//                         rank: rankOne,
//                         sourceGame: game3,
//                         sourcePool: {}
//                     }
//                 }
//             }
//         };
//     };

//     const game2Test = () => {
//         let rankOne = 0;
//         const findRounds1 = dataMap.filter((value) => value.stage === "round 1");
//         if (findRounds1.length !== 0) {
//             rankOne = 1;
//         }

//         const ttH = () => {
//             return {
//                 team: {
//                     id: "10",
//                     name: "UserOne"
//                 },
//                 score: {
//                     score: 5
//                 }
//             };
//         };
//         const ttV = () => {
//             return {
//                 team: {
//                     id: "11",
//                     name: "UserTwo"
//                 },
//                 score: {
//                     score: 5
//                 }
//             };
//         };
//         return {
//             id: "1",
//             name: "round 2",
//             scheduled: Number(new Date()),
//             sides: {
//                 home: {
//                     ...ttH(),
//                     seed: {
//                         displayName: "A1",
//                         rank: 1,
//                         sourceGame: game2,
//                         sourcePool: {}
//                     }
//                 },
//                 visitor: {
//                     ...ttV(),
//                     seed: {
//                         displayName: "A2",
//                         rank: 1,
//                         sourceGame: game3,
//                         sourcePool: {}
//                     }
//                 }
//             }
//         };
//     };

//     const games = [
//         {
//             id: "1",
//             name: "semi-finals",
//             scheduled: Number(new Date()),
//             sides: {
//                 home: {
//                     team: {
//                         id: "10",
//                         name: "UserOne"
//                     },
//                     score: {
//                         score: 5
//                     },
//                     seed: {
//                         displayName: "A1",
//                         rank: 1,
//                         sourceGame: game2,
//                         sourcePool: {}
//                     }
//                 },
//                 visitor: {
//                     team: {
//                         id: "11",
//                         name: "UserTwo"
//                     },
//                     score: {
//                         score: 5
//                     },
//                     seed: {
//                         displayName: "A2",
//                         rank: 1,
//                         sourceGame: game3,
//                         sourcePool: {}
//                     }
//                 }
//             }
//         },
//         {
//             id: "1",
//             name: "semi-finals",
//             scheduled: Number(new Date()),
//             sides: {
//                 home: {
//                     team: {
//                         id: "10",
//                         name: "UserOne"
//                     },
//                     score: {
//                         score: 5
//                     },
//                     seed: {
//                         displayName: "A1",
//                         rank: 1,
//                         sourceGame: game2,
//                         sourcePool: {}
//                     }
//                 },
//                 visitor: {
//                     team: {
//                         id: "11",
//                         name: "UserTwo"
//                     },
//                     score: {
//                         score: 5
//                     },
//                     seed: {
//                         displayName: "A2",
//                         rank: 1,
//                         sourceGame: game3,
//                         sourcePool: {}
//                     }
//                 }
//             }
//         }
//     ];

//     return (
//         <>
//             <Bracket game={game1Test()} />
//             <Bracket game={game2Test()} />
//             {/* <Bracket game={game3Test()} /> */}

//             {/* <BracketGenerator game={games} /> */}
//         </>
//     );
// }
