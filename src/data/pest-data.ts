import cockroach from '../assets/svgs/cockroach.svg';
import termite from '../assets/svgs/termite.svg';
import wasp from '../assets/svgs/wasp.svg';
import ant from '../assets/svgs/ant.svg';
import mosquito from '../assets/svgs/mosquito.svg';
import spider from '../assets/svgs/spider.svg';
import flea from '../assets/svgs/flea.svg';
import earwig from '../assets/svgs/earwig.svg';
import beetle from '../assets/svgs/beetle.svg';
import bedbug from '../assets/svgs/bedbug.svg';

export const insects = [
    {
        img: cockroach,
        alt: 'Cockroach',
        name: 'Cockroaches',
        latin: 'Blattodea',
        description: 'Cockroaches are known for spreading diseases and contaminating food, making them a significant health risk in homes and businesses.',
        detail: 'Cockroaches can survive in almost any environment and can live for a month without food. They are nocturnal and typically hide in dark, moist areas during the day.',
        detailsList: [
            'Cockroaches can survive without their head for a week.',
            'They can hold their breath for up to 40 minutes.',
            'Cockroaches can run up to three miles in an hour.'
        ],
        additionalInfo: 'Cockroaches have been around for over 300 million years and are one of the most adaptable pests. Effective control involves sanitation, exclusion, and the use of insecticides.'
    },
    {
        img: termite,
        alt: 'Termite',
        name: 'Termites',
        latin: 'Isoptera',
        description: 'Termites cause extensive damage to wooden structures by feeding on cellulose, leading to costly repairs for homeowners and businesses.',
        detail: 'Termites live in colonies that can range from a few hundred to millions of individuals. They are divided into workers, soldiers, and reproductive members.',
        detailsList: [
            'Termites never sleep and can work 24 hours a day.',
            'A single termite colony can eat up to 1,000 pounds of wood per year.',
            'There are over 2,000 known termite species worldwide.'
        ],
        additionalInfo: 'Preventing termite infestations involves reducing moisture around your home, removing potential food sources, and having regular inspections by pest control professionals.'
    },
    {
        img: wasp,
        alt: 'Wasp',
        name: 'Wasps',
        latin: 'Hymenoptera',
        description: 'Wasps can be aggressive and their stings are painful and can cause allergic reactions, posing a threat to people, especially those allergic to insect stings.',
        detail: 'Wasps are known for their distinct yellow and black coloring and their ability to sting multiple times. They build nests in protected areas and can be very territorial.',
        detailsList: [
            'Wasps can remember human faces.',
            'A wasp colony can contain up to 5,000 members.',
            'Wasps play a vital role in pollination and pest control.'
        ],
        additionalInfo: 'To prevent wasp infestations, keep food and drinks covered when outside, seal cracks and crevices in your home, and avoid wearing bright colors and strong fragrances.'
    },
    {
        img: ant,
        alt: 'Ant',
        name: 'Ants',
        latin: 'Formicidae',
        description: 'Ants invade homes in search of food and water, and some species can cause structural damage by nesting in wood.',
        detail: 'Ants are social insects that live in colonies. They communicate through chemicals called pheromones and work together to find food and protect the nest.',
        detailsList: [
            'Ants can lift objects 50 times their own body weight.',
            'There are over 12,000 species of ants worldwide.',
            'Ants have two stomachs, one for their own food and one for food to share with others.'
        ],
        additionalInfo: 'Effective ant control involves identifying the species, locating and treating the nest, and maintaining good sanitation practices to prevent future infestations.'
    },
    {
        img: mosquito,
        alt: 'Mosquito',
        name: 'Mosquitos',
        latin: 'Culicidae',
        description: 'Mosquitoes are vectors for serious diseases such as malaria, dengue fever, and Zika virus, making them one of the most dangerous pests.',
        detail: 'Mosquitoes breed in standing water and are most active during dawn and dusk. Only female mosquitoes bite, as they need blood to produce eggs.',
        detailsList: [
            'Mosquitoes have been on Earth for more than 100 million years.',
            'A mosquito can drink up to three times its weight in blood.',
            'Mosquitoes are attracted to body heat, carbon dioxide, and sweat.'
        ],
        additionalInfo: 'To reduce mosquito populations, eliminate standing water around your home, use mosquito repellents, and install screens on windows and doors to prevent them from entering your house.'
    },
    {
        img: spider,
        alt: 'Spider',
        name: 'Spiders',
        latin: 'Araneae',
        description: 'While most spiders are harmless, some species have venomous bites that can cause serious health issues, making them a concern in homes and businesses.',
        detail: 'Spiders are arachnids, not insects. They have eight legs and two body segments. They use silk to build webs, capture prey, and protect their eggs.',
        detailsList: [
            'Spiders can produce up to seven different types of silk.',
            'The largest spider species is the Goliath birdeater tarantula.',
            'Some spiders can live up to 20 years.'
        ],
        additionalInfo: 'To prevent spider infestations, reduce clutter, seal cracks and gaps in your home, and keep your home clean to remove potential hiding spots and food sources.'
    },
    {
        img: flea,
        alt: 'Flea',
        name: 'Fleas',
        latin: 'Siphonaptera',
        description: 'Fleas are known for their ability to quickly infest homes and transmit diseases such as the bubonic plague and typhus, as well as causing severe discomfort to pets and humans through their bites.',
        detail: 'Fleas are small, wingless insects that feed on the blood of mammals and birds. They can jump up to 150 times their own body length.',
        detailsList: [
            'Fleas can lay up to 50 eggs per day.',
            'A flea can jump vertically up to 7 inches and horizontally up to 13 inches.',
            'Fleas can survive without a host for several months.'
        ],
        additionalInfo: 'Effective flea control involves treating pets, washing bedding, vacuuming regularly, and using flea control products to break the flea life cycle.'
    },
    {
        img: earwig,
        alt: 'Earwig',
        name: 'Earwigs',
        latin: 'Dermaptera',
        description: 'Earwigs are primarily nuisance pests that can invade homes in large numbers and cause damage to plants and flowers in gardens.',
        detail: 'Earwigs are nocturnal insects that are easily recognized by their pincers. They prefer dark, damp environments and can be found under rocks, logs, and mulch.',
        detailsList: [
            'Earwigs can fly but prefer to crawl.',
            'They use their pincers for defense and capturing prey.',
            'Earwigs are omnivores and feed on plants, insects, and decaying organic matter.'
        ],
        additionalInfo: 'To control earwig populations, reduce moisture around your home, remove debris and organic matter, and use insecticides if necessary.'
    },
    {
        img: beetle,
        alt: 'Beetle',
        name: 'Beetles',
        latin: 'Coleoptera',
        description: 'Beetles can cause significant damage to crops, stored food products, and natural fibers, leading to economic losses in agricultural and urban settings.',
        detail: 'Beetles are the largest group of insects, with over 350,000 known species. They have hard, shell-like wings called elytra that protect their delicate hind wings.',
        detailsList: [
            'Beetles can be found in nearly every habitat on Earth.',
            'Some beetle species are beneficial and help control pests.',
            'Beetles undergo complete metamorphosis, including egg, larva, pupa, and adult stages.'
        ],
        additionalInfo: 'Preventing beetle infestations involves proper storage of food products, regular cleaning, and using pest control measures when necessary.'
    },
    {
        img: bedbug,
        alt: 'Bedbug',
        name: 'Bedbugs',
        latin: 'Cimex lectularius',
        description: 'Bedbugs are notorious for their bites, which cause itching and sleep disturbances. They can also spread rapidly and are difficult to eradicate, making them a persistent pest problem.',
        detail: 'Bedbugs are small, reddish-brown insects that feed on the blood of humans and animals. They hide in cracks and crevices during the day and come out to feed at night.',
        detailsList: [
            'Bedbugs can survive for several months without feeding.',
            'They can lay up to five eggs per day.',
            'Bedbugs are excellent hitchhikers and can spread through luggage, clothing, and furniture.'
        ],
        additionalInfo: 'Effective bedbug control involves thorough inspections, using heat treatments or insecticides, and taking preventive measures to avoid re-infestation.'
    },
];
