// Silhouette icons (rendered through a CSS mask so they take brand colors)
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

// Photos
import cockroachPhoto from '../assets/photos/pest-cockroach.webp';
import waspPhoto from '../assets/photos/pest-wasp.webp';
import mosquitoPhoto from '../assets/photos/pest-mosquito.webp';
import spiderPhoto from '../assets/photos/pest-spider.webp';
import fleaPhoto from '../assets/photos/pest-flea.webp';
import earwigPhoto from '../assets/photos/pest-earwig.webp';
import beetlePhoto from '../assets/photos/pest-beetle.webp';
import termitePhoto from '../assets/photos/termites-wood.webp';
import antPhoto from '../assets/photos/pest-ant.webp';
import bedbugPhoto from '../assets/photos/pest-bedbug.webp';

export interface Pest {
    slug: string;
    name: string;
    latin: string;
    icon: string;
    photo?: string;
    photoAlt?: string;
    description: string;
    detail: string;
    facts: string[];
    prevention: string;
    /** Related service on the Residential page */
    service?: string;
}

export const insects: Pest[] = [
    {
        slug: 'cockroaches',
        name: 'Cockroaches',
        latin: 'Blattodea',
        icon: cockroach,
        photo: cockroachPhoto,
        photoAlt: 'German cockroach feeding on spilled sugar',
        description: 'Cockroaches spread bacteria and contaminate food, making them a real health risk in homes and businesses.',
        detail: 'Cockroaches can survive in almost any environment and can live for a month without food. They are nocturnal and hide in dark, moist areas like under sinks, behind appliances, and inside wall voids during the day.',
        facts: [
            'Cockroaches can survive without their head for about a week.',
            'They can hold their breath for up to 40 minutes.',
            'Some species can run up to three miles per hour.',
        ],
        prevention: 'Start by removing food and water sources: keep counters clean, store food in sealed containers, and fix leaks. Baits can help with light activity, but established infestations usually need professional treatment that reaches where roaches hide.',
    },
    {
        slug: 'termites',
        name: 'Termites',
        latin: 'Isoptera',
        icon: termite,
        photo: termitePhoto,
        photoAlt: 'Termites tunneling through damaged wood',
        description: 'Termites feed on the cellulose in wood, quietly causing structural damage that can lead to costly repairs.',
        detail: 'Termites live in colonies that range from a few hundred to millions of individuals, divided into workers, soldiers, and reproductives. On Long Island, eastern subterranean termites are the most common species, nesting in soil and building mud tubes to reach wood.',
        facts: [
            'Worker termites feed around the clock.',
            'Spring swarms of winged termites are often the first visible sign of a colony.',
            'There are over 2,000 known termite species worldwide.',
        ],
        prevention: 'Reduce moisture around your foundation, keep firewood and mulch away from the house, and avoid wood-to-soil contact. If you see mud tubes, swarmers, or damaged wood, schedule an inspection right away.',
        service: 'termite-control',
    },
    {
        slug: 'wasps',
        name: 'Wasps',
        latin: 'Vespidae',
        icon: wasp,
        photo: waspPhoto,
        photoAlt: 'Close-up of a yellow and black paper wasp',
        description: 'Wasps can be aggressive near their nests, and their painful stings can cause serious allergic reactions.',
        detail: 'Wasps, including yellowjackets and paper wasps, are known for their yellow and black markings and their ability to sting more than once. They build nests in sheltered spots like eaves, sheds, and underground cavities, and defend them aggressively in late summer.',
        facts: [
            'Some wasps can recognize individual faces.',
            'A yellowjacket colony can grow to several thousand workers by late summer.',
            'Wasps help control garden pests by preying on other insects.',
        ],
        prevention: 'Keep food and drinks covered outdoors, seal gaps around eaves and siding, and keep trash cans closed. If you find a nest, don\'t try to knock it down yourself. Have a professional remove it safely.',
    },
    {
        slug: 'ants',
        name: 'Ants',
        latin: 'Formicidae',
        icon: ant,
        photo: antPhoto,
        photoAlt: 'Close-up of a black carpenter ant',
        description: 'Ants invade homes looking for food and water, and carpenter ants can damage wood by nesting inside it.',
        detail: 'Ants are social insects that live in colonies. They communicate with chemical trails called pheromones, which is why one scout can quickly become a line of ants across your kitchen.',
        facts: [
            'Ants can lift objects many times their own body weight.',
            'There are over 12,000 known ant species worldwide.',
            'Ants share food with nestmates through a "social stomach."',
        ],
        prevention: 'Keep food sealed and surfaces crumb-free, fix moisture problems, and seal entry points. Because spraying visible ants doesn\'t reach the nest, effective control means identifying the species and treating the colony.',
        service: 'ant-control',
    },
    {
        slug: 'mosquitoes',
        name: 'Mosquitoes',
        latin: 'Culicidae',
        icon: mosquito,
        photo: mosquitoPhoto,
        photoAlt: 'Close-up of a mosquito resting on fabric',
        description: 'Mosquitoes are more than a nuisance. In New York they can carry diseases like West Nile virus.',
        detail: 'Mosquitoes breed in standing water and are most active at dawn and dusk. Only females bite, because they need blood to produce eggs. A bottle cap of water is enough for them to breed.',
        facts: [
            'Mosquitoes have been around for more than 100 million years.',
            'They find you by tracking carbon dioxide, body heat, and sweat.',
            'Some species can go from egg to adult in about a week.',
        ],
        prevention: 'Empty standing water from buckets, gutters, planters, and toys at least weekly. Keep window and door screens in good repair, and consider yard treatment to target where mosquitoes rest.',
        service: 'mosquito-control',
    },
    {
        slug: 'spiders',
        name: 'Spiders',
        latin: 'Araneae',
        icon: spider,
        photo: spiderPhoto,
        photoAlt: 'House spider hanging beneath its cobweb',
        description: 'Most spiders are harmless, but a heavy presence can signal other pests, and a few species have medically significant bites.',
        detail: 'Spiders are arachnids, not insects. They have eight legs and two body segments, and they use silk to build webs, catch prey, and protect their eggs. Indoors, they go where their food (other insects) is.',
        facts: [
            'Spiders can produce up to seven different types of silk.',
            'They help control other insect populations.',
            'Some spiders can live for years.',
        ],
        prevention: 'Reduce clutter, vacuum webs and egg sacs, seal cracks and gaps, and cut down on outdoor lighting that draws in the insects spiders eat.',
    },
    {
        slug: 'fleas',
        name: 'Fleas',
        latin: 'Siphonaptera',
        icon: flea,
        photo: fleaPhoto,
        photoAlt: 'Magnified side view of a flea',
        description: 'Fleas multiply quickly, cause itchy bites for people and pets, and can be hard to get rid of without treating their whole life cycle.',
        detail: 'Fleas are small, wingless insects that feed on the blood of mammals and birds. Most of a flea population lives in carpets, bedding, and furniture as eggs, larvae, and pupae, not on your pet.',
        facts: [
            'A female flea can lay up to 50 eggs per day.',
            'Fleas can jump many times their own body length.',
            'Flea pupae can wait for weeks before hatching.',
        ],
        prevention: 'Treat pets with a vet-recommended product, wash bedding in hot water, and vacuum often. For heavy infestations, professional treatment of the home breaks the life cycle.',
    },
    {
        slug: 'earwigs',
        name: 'Earwigs',
        latin: 'Dermaptera',
        icon: earwig,
        photo: earwigPhoto,
        photoAlt: 'Earwig with rear pincers on weathered wood',
        description: 'Earwigs are mostly nuisance pests, but they can show up indoors in large numbers and damage garden plants.',
        detail: 'Earwigs are nocturnal and easy to recognize by the pincers on their abdomen. They like dark, damp places such as mulch, leaf litter, and under stones, and they move indoors when it gets too hot or dry outside.',
        facts: [
            'Many earwigs can fly, but they rarely do.',
            'They use their pincers for defense and to catch prey.',
            'Earwigs eat plants, other insects, and decaying matter.',
        ],
        prevention: 'Reduce moisture around your foundation, pull mulch and leaf litter back from the house, and seal gaps around doors and windows.',
    },
    {
        slug: 'beetles',
        name: 'Beetles',
        latin: 'Coleoptera',
        icon: beetle,
        photo: beetlePhoto,
        photoAlt: 'Close-up of a carpet beetle',
        description: 'Household beetles can damage stored food, fabrics, carpets, and wood.',
        detail: 'Beetles are the largest group of insects, with over 350,000 known species. Indoors, the usual suspects are pantry beetles in dry goods and carpet beetles in rugs, wool, and upholstery.',
        facts: [
            'Beetles live in nearly every habitat on Earth.',
            'Carpet beetle larvae, not adults, do the damage to fabrics.',
            'Beetles go through egg, larva, pupa, and adult stages.',
        ],
        prevention: 'Store dry goods in sealed containers, vacuum carpets and under furniture regularly, and clean stored clothing before putting it away. Identifying the beetle is the key to treating it.',
    },
    {
        slug: 'bed-bugs',
        name: 'Bed Bugs',
        latin: 'Cimex lectularius',
        icon: bedbug,
        photo: bedbugPhoto,
        photoAlt: 'Close-up of a bed bug on fabric',
        description: 'Bed bugs cause itchy bites and sleepless nights, spread easily, and are notoriously hard to get rid of on your own.',
        detail: 'Bed bugs are small, reddish-brown insects that feed on blood. They hide in mattress seams, furniture joints, and cracks during the day and come out to feed at night.',
        facts: [
            'Bed bugs can survive for months without feeding.',
            'A female can lay several eggs per day.',
            'They hitchhike in luggage, clothing, and used furniture.',
        ],
        prevention: 'Inspect luggage and secondhand furniture, use mattress encasements, and wash travel clothes on high heat. If you suspect bed bugs, call for an inspection before the problem spreads.',
        service: 'bed-bug-treatment',
    },
];

export const findPest = (slug?: string) => insects.find((pest) => pest.slug === slug);
