// Intersection is picking up the common properties of each of the type and buliding a combined object
// Basically it picks both unique and common property from types
type Lion = {
    name: string;
    roaring: boolean;
    isPowerfull: boolean;
};

type Tiger = {
    name: string;
    growl: boolean;
    isPowerfull: boolean;
};

// & symbol denotes its intersection type
type LionAndTiger = Lion & Tiger;

let animal: LionAndTiger = {
    name: 'HybridAnimal',
    isPowerfull: true,
    roaring: true,
    growl: true,
}