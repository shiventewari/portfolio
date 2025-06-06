// CAROUSEL CONFIGURATION FILE
// Easy management: Add, remove, reorder, or replace items by editing this file

const carouselData = {
    // Bodybuilding Progress Carousel
    bodybuilding: {
        title: "Bodybuilding Progress",
        items: [
            {
                type: "image",
                src: "images/shvn-bb-back-03.png?v=3", 
                alt: "Back pose 3",
                caption: "Back Development - Progress Shot 3"
            },            
            {
                type: "image", 
                src: "images/shvn-bb-back-02.webp?v=3",
                alt: "Back pose 2",
                caption: "Back Development - Progress Shot 2"
            },
            {
                type: "image",
                src: "images/shvn-bb-ft-01.webp?v=3",
                alt: "Front pose 1", 
                caption: "Front Development - Progress Shot 1"
            }
        ]
    },

    // Calisthenics Skills Carousel
    calisthenics: {
        title: "Calisthenics Skills",
        items: [
            {
                type: "image",
                src: "images/calisthenics/planche-1.jpg?v=3",
                alt: "Planche progression 1",
                caption: "Planche - Elite Pushing Strength"
            },
            {
                type: "image",
                src: "images/calisthenics/planche-2.jpg?v=3",
                alt: "Planche progression 2",
                caption: "Planche - Perfect Form"
            }   ,         
            {
                type: "image",
                src: "images/calisthenics/front-lever-1.jpg?v=3",
                alt: "Front lever progression 1",
                caption: "Front Lever - Advanced Bodyweight Hold"
            },
            {
                type: "image",
                src: "images/calisthenics/front-lever-2.jpg?v=3",
                alt: "Front lever progression 2",
                caption: "Front Lever - Full Extension"
            }
        ]
    },

    // Fitness Activities Carousel
    fitness: {
        title: "Fitness Activities",
        items: [
            {
                type: "video",
                src: "videos/shvn-bouldering-jump.mp4",
                alt: "Bouldering dyno jump",
                caption: "Executing a Dyno Move - Rock Climbing"
            },
            {
                type: "video",
                src: "videos/shvn-climbing-board.mp4",
                alt: "Climbing board",
                caption: "Climbing the Board - Rock Climbing"
            }
        ]
    },

    // Technical Projects Carousel
    projects: {
        title: "Technical Projects", 
        items: [
            {
                type: "image",
                src: "images/shvn-pcap-cert.png?v=1",
                alt: "PCAP Python certification",
                caption: "PCAP™ – Certified Associate Python Programmer"
            },            
            {
                type: "image",
                src: "images/shvn-python-chess.png",
                alt: "Python chess game screenshot",
                caption: "Chess Game Built in Python"
            },
            {
                type: "image",
                src: "images/math-game-preview.png",
                alt: "Calculus turn-based game preview",
                caption: "Calculus Turn-Based Game - Creative Learning Tool"
            }
            // Add more project screenshots here:
            // {
            //     type: "image",
            //     src: "images/bci-project.png",
            //     alt: "Brain computer interface project",
            //     caption: "BCI Muscle Activation Detection System"
            // }
        ]
    },

    // LEGO Millennium Falcon Carousel
    lego_falcon: {
        title: "LEGO Millennium Falcon Build",
        items: [
            {
                type: "image",
                src: "images/lego-mil-falcon/PXL_20230127_231118290.jpg?v=1",
                alt: "Millennium Falcon build progress 1",
                caption: "Early Build Stage - Foundation"
            },
            {
                type: "image",
                src: "images/lego-mil-falcon/PXL_20230202_120055871.jpg?v=1",
                alt: "Millennium Falcon build progress 2",
                caption: "Mid Build Stage - Structure Taking Shape"
            },
            {
                type: "image",
                src: "images/lego-mil-falcon/PXL_20230203_023921008.jpg?v=1",
                alt: "Millennium Falcon near completion",
                caption: "Near Completion - Details Added"
            },
            {
                type: "image",
                src: "images/lego-mil-falcon/PXL_20230203_033543151.jpg?v=1",
                alt: "Millennium Falcon completed",
                caption: "Final Build - The Legendary Ship Complete"
            }
        ]
    },

    // LEGO Bugatti Carousel
    lego_bugatti: {
        title: "LEGO Bugatti Chiron Build",
        items: [
            {
                type: "image",
                src: "images/lego-bugati/PXL_20211015_021421330.jpg?v=1",
                alt: "Bugatti Chiron build start",
                caption: "Build Beginning - Complex Engineering Ahead"
            },
            {
                type: "image",
                src: "images/lego-bugati/PXL_20211021_013525935.jpg?v=1",
                alt: "Bugatti Chiron chassis",
                caption: "Chassis Construction - Precision Engineering"
            },
            {
                type: "image",
                src: "images/lego-bugati/PXL_20211021_013604239.jpg?v=1",
                alt: "Bugatti Chiron body work",
                caption: "Body Assembly - Aerodynamic Design"
            },
            {
                type: "image",
                src: "images/lego-bugati/PXL_20211021_013825257.jpg?v=1",
                alt: "Bugatti Chiron final details",
                caption: "Final Details - Premium Supercar Complete"
            }
        ]
    }

    // EASILY ADD NEW CAROUSELS:
    // Uncomment and customize the section below to add a new carousel
    
    // creative: {
    //     title: "Creative Projects",
    //     items: [
    //         {
    //             type: "image",
    //             src: "images/origami-1.jpg",
    //             alt: "Complex origami model",
    //             caption: "Intricate Origami Dragon"
    //         },
    //         {
    //             type: "image", 
    //             src: "images/lego-build.jpg",
    //             alt: "Custom LEGO creation",
    //             caption: "Custom LEGO Architecture"
    //         }
    //     ]
    // },

    // academic: {
    //     title: "Academic Work",
    //     items: [
    //         {
    //             type: "image",
    //             src: "images/physics-project.jpg",
    //             alt: "Physics experiment setup",
    //             caption: "Advanced Physics Laboratory Work"
    //         },
    //         {
    //             type: "image",
    //             src: "images/math-visualization.png", 
    //             alt: "Mathematical visualization",
    //             caption: "3D Mathematical Modeling Project"
    //         }
    //     ]
    // }
};

// INSTRUCTIONS FOR EASY MANAGEMENT:
/*

1. TO ADD A NEW ITEM TO AN EXISTING CAROUSEL:
   - Find the carousel you want (bodybuilding, fitness, projects)
   - Add a new object to the 'items' array following this format:
   {
       type: "image" or "video",
       src: "path/to/your/file.jpg",
       alt: "Description for accessibility",
       caption: "Caption that appears on the image"
   }

2. TO REMOVE AN ITEM:
   - Simply delete the entire object from the items array
   - Or comment it out with // at the beginning of each line

3. TO REORDER ITEMS:
   - Cut and paste the objects within the items array
   - The first item (index 0) will be shown first

4. TO ADD A NEW CAROUSEL:
   - Uncomment one of the example carousels at the bottom
   - Or create a new one following the same pattern
   - Add the carousel ID to your HTML with id="[carouselname]-carousel"
   - Add a carousel container wrapper in your HTML

5. TO CHANGE CAROUSEL TITLES:
   - Edit the "title" property for any carousel

6. SUPPORTED FILE TYPES:
   - Images: .jpg, .jpeg, .png, .gif, .webp
   - Videos: .mp4, .webm, .ogg (videos auto-play on loop, muted)

7. LINKING TO SPECIFIC SLIDES:
   - Use data-carousel="carouselname" and data-slide="0" (0-indexed)
   - Example: <a href="#" data-carousel="bodybuilding" data-slide="2">View Photo 3</a>

*/ 