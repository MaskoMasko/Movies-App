AHHHH STORE MAKES ME GO NOOOOOO!

things to do:
-filteranje po svemu DONE
-make genres touchable DONE
-napravi svoje hookove
-active gledas idk

po mogucnosti cili api file staviti u store ali zasad neka stoji

moren koristiti react elements jako je kul ima kompp ke ti rabe believe:!:!:!:!:!

I HAVE TRIED SHOPIFY/RESTYLE LIB AND I DON'T REALLY LIKE IT SO YEAH.... back to the start ili se nauciti kako oni to delaju custom components
ubija mi cesto expo na mobu (nez za na pcu)

u views getter stavlja:
getSnapshot - getSnapshot(model, applyPostProcess): returns a snapshot representing the current state of the model
(i to dosta njih)
-nez ca je tryRefrence
-nike jednostavne stvari - provjerava dali je user loginan, dobije niki item z liste, zbrajanje zbroja, array od mapa, mapiranje, filteranje, counter, booleans, returna url

---

HOME PAGE
then we have filtering by tvshows, movies i categories
onako top movie u pozadini- nebas ali done
watch it again (aka meni favs) -- BUT FKCUBUNNNFGGg UI NE DELKA OMFGA SGJ KS GS DGK DGK KSD SKD GKS DKSDF REORTED
top 10 idk samoo da go yes
TAB za 3 screena 1 HOME 1COMING SOON 1 DOWNLOADS

COMMING SOON SCREEm

i can sort by newest and i can try to push notifications
yee thats all i got for this one

DOWNLOADS
dowload postere thats the best i can do sooo... nenenenen

#SVAKI SCREEN IMA U HEADERU SEAARCH BAR neneneennene
#MOZDA NEKMI SISTEM KOJI ZAPAMTI USERE
i tjt ja mislin

---

<<<<<<< HEAD =======
generics typescript:
function funcName<T>(prop:T):T[]{

}
T predstvalja Type
primjer:
const notStringArray: string[] = funcName({}) --> passamo obj ne array
const stringArray = funcName<string>("") --> tako dela
ako imamo interface:
interface Nisto{
name:string
}
function nikiName<T extends Nisto>(nekiArray:T[]){
i onda se more
nekiArray.forEach((e)=>e.name)
}

wtf?
interface CacheHost {
save: (a: any) => void;
}

PUT OVE FUNK: Cache->CacheHost->T
function addObjectToCache<T, Cache extends CacheHost>(obj: T, cache: Cache): Cache {
cache.save(obj);
return cache;
}

postoji Partial<Props> i Required<Props> i Readonly<Props> -(nemore se promjeniti)
Record<T1, T2>
Record constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

posoje jos i Pick i Omit ali me ne zanimaju tako da :)

> > > > > > > 6a06f38e00953b8829aa2bc30758e89086503e0c

OVAJ API
-ima rating kao 12, peg 18 i tako ni bas nisto ali ako be bude ideja se more dodati na details page
-ima networks ni bas nisto
-ima trending ali da...
-UUUUUUU VERY NICE ACTORE MOREN i aint gonna lose that bad boy
https://api.themoviedb.org/3/person/popular?api_key=b27cfa6975b477d35aff752392afd2bc&language=en-US&page=1
-provided regions i dont rly know AHHHHHHHHHH

JOS ZA NAPRAVITI:
-dodati screenove za glumce - yes kinda lose nap ali dela
-u kategorije dodati nike liste ili ca god
-vjv ne dela zboj ssot ali samo provivan nisto tako da...

ZA POMOCI:
-download popraviti
-ref na listami
-red underlines -- sad hi je malo previse ://

OVAKO JER DA
-filter input
-i think da ima i trailera

HOOKVI
useState
useEffect
useContext
useForm
useMemo
useRef
useCallback
useReducer
customHooks
