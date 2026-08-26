import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop" },
    ],
  }),
  component: Home,
});

// ---------- Image mapping (Unsplash, curated real food IDs) ----------
const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&auto=format&fit=crop&q=70`;
const IMGS = {
  arancini: IMG("1633436375153-d7045cb93e38"),
  bruschetta: IMG("1572695157366-5e585ab2b69f"),
  calamari: IMG("1599487488170-d11ec9c172f0"),
  fries: IMG("1573080496219-bb080dd4f877"),
  cheeseFries: IMG("1585109649139-366815a0d713"),
  mozzarella: IMG("1548340748-6d2b7d7da280"),
  shrimp: IMG("1625944230945-1b7dd3b949ab"),
  chickenStrips: IMG("1562967914-608f82629710"),
  steakSandwich: IMG("1528735602780-2552fd46c7af"),
  chickenSandwich: IMG("1606755962773-d324e0a13086"),
  shrimpSandwich: IMG("1608039755401-742074f0548d"),
  sausage: IMG("1601050690597-df0568f70950"),
  fajita: IMG("1600891964092-4316c288032e"),
  beefBurger: IMG("1568901346375-23c9450c58cd"),
  chickenBurger: IMG("1606131731446-5568d87113aa"),
  chickenPiccata: IMG("1532550907401-a500c9a57435"),
  chickenCream: IMG("1604908176997-125f25cc6f3d"),
  parmigiana: IMG("1625944525533-473f1a3d54e7"),
  chickenRoll: IMG("1598515213692-5f252f75d785"),
  fillet: IMG("1546964124-0cce460f38ef"),
  ribeye: IMG("1544025162-d76694265947"),
  pizzaTosca: IMG("1513104890138-7c749659a591"),
  pizzaRanch: IMG("1571407970349-bc81e7e96d47"),
  pizzaBBQ: IMG("1594007654729-407eedc4be65"),
  pepperoni: IMG("1628840042765-356cda07504e"),
  pizzaSeafood: IMG("1601924582970-9238bcb495d9"),
  pizzaShrimp: IMG("1565299624946-b28f40a0ae38"),
  margherita: IMG("1604382354936-07c5d9983bd3"),
  ravioli: IMG("1587740908075-9e245311c8e2"),
  ravioliCheese: IMG("1621996346565-e3dbc646d9a9"),
  lasagnaBeef: IMG("1619895092538-128341789043"),
  lasagnaChicken: IMG("1633504581786-316c8002b1b9"),
  alfredo: IMG("1551183053-bf91a1d81141"),
  pesto: IMG("1563379926898-05f4575a45d8"),
  shrimpPasta: IMG("1563245372-f21724e3856d"),
  negresco: IMG("1608755728617-aefab37d2edd"),
  macCheese: IMG("1543826173-70651703c5a4"),
  bolognese: IMG("1622973536968-3ead9e780960"),
  arrabbiata: IMG("1598866594230-a7c12756260f"),
  aglioOlio: IMG("1626082927389-6cd097cee6a6"),
  risottoMushroom: IMG("1476124369491-e7addf5db371"),
  risottoChicken: IMG("1633478149916-3a4de79f5b56"),
  risottoSeafood: IMG("1633478149961-c81e6f38b06b"),
  soupChicken: IMG("1547592180-85f173990554"),
  soupMushroom: IMG("1583608564770-3fb0e3f9c9f7"),
  soupArt: IMG("1547592166-23ac45744acd"),
  soupSeafood: IMG("1519708227418-c8fd9a32b7a2"),
  croissantPlain: IMG("1555507036-ab1f4038808a"),
  croissantCheese: IMG("1600093463592-8e36ae95ef56"),
  croissantTurkey: IMG("1600715502832-1d3d1e0f27f5"),
  croissantNutella: IMG("1623334044303-241021148842"),
  croissantPistachio: IMG("1620921586786-4dfe0d5c7f60"),
  sandwichCheese: IMG("1528735602780-2552fd46c7af"),
  sandwichTurkey: IMG("1550507992-eb63ffee0847"),
  sandwichTuna: IMG("1626202373052-9cfe08d030d1"),
  tiramisu: IMG("1571877227200-a0d98ea607e9"),
  cheesecake: IMG("1533134242443-d4fd215305ad"),
  redVelvet: IMG("1586788680434-30d324b31f24"),
  molten: IMG("1541599540903-216a46ca1dc0"),
  sanSebastian: IMG("1567327613485-fbc7bf196198"),
  chocolateCake: IMG("1578985545062-69928b1d9587"),
  mousse: IMG("1587314168485-3236d6710814"),
  brownies: IMG("1606313564200-e75d5e30476c"),
  waffle: IMG("1562376552-0d160a2f238d"),
  cinnamon: IMG("1509365465985-25d11c17e812"),
  cookies: IMG("1499636136210-6f4ee915583e"),
  mojito: IMG("1551024709-8f23befc6f87"),
  juice: IMG("1613478223719-2ab802602423"),
  iceLatte: IMG("1517701550927-30cf4ba1dba5"),
  frappe: IMG("1461023058943-07fcbe16d735"),
  cola: IMG("1554866585-cd94860890b7"),
  redbull: IMG("1622483767028-3f66f32aef97"),
  water: IMG("1548839140-29a749e1cf4d"),
  espresso: IMG("1510707577719-ae7c14805e3a"),
  latte: IMG("1509042239860-f550ce710b93"),
  cappuccino: IMG("1572442388796-11668a67e53d"),
  flatWhite: IMG("1497935586351-b67a49e012bf"),
  hotChocolate: IMG("1517578239113-b03992dcdd25"),
  karak: IMG("1571934811356-5cc061b6821f"),
  matcha: IMG("1536256263959-770b48d82b0a"),
  sahleb: IMG("1608755728617-aefab37d2edd"),
  nutella: IMG("1600617545399-b8ec6d072ac6"),
  nuts: IMG("1508061253366-f7da158b6d46"),
  blueberry: IMG("1498557850523-fd3d118b962e"),
};

// ---------- Menu data ----------
type Item = { id: string; en: string; ar: string; price: number; desc?: string; img: string };
type Category = { id: string; en: string; ar: string; items: Item[] };

const MENU: Category[] = [
  {
    id: "antipasti", en: "Antipasti & Sides", ar: "المقبلات الفاخرة",
    items: [
      { id: "arancini", en: "Arancini", ar: "ارانشيني", price: 155, desc: "Fried Italian rice balls with beef ragout and mozzarella over tomato sauce.", img: IMGS.arancini },
      { id: "bruschetta", en: "Bruschetta Caprese", ar: "كابريزي بروسكيتا", price: 135, desc: "Toasted bread, pesto mayo, tomato, buffalo mozzarella, arugula & balsamic.", img: IMGS.bruschetta },
      { id: "calamari", en: "Calamari Fritti", ar: "كاليماري فريتي", price: 150, desc: "Crispy fried calamari rings with tartar sauce.", img: IMGS.calamari },
      { id: "cfries", en: "Classic Fries", ar: "كلاسيك فرايز", price: 75, desc: "Mexican spices, ranch sauce.", img: IMGS.fries },
      { id: "chfries", en: "Cheese Fries", ar: "تشيز فرايز", price: 85, desc: "Crispy fries with special cheddar sauce.", img: IMGS.cheeseFries },
      { id: "mozz", en: "Mozzarella Fritta", ar: "فرايد موزاريلا", price: 125, desc: "Fried mozzarella sticks with sweet chili.", img: IMGS.mozzarella },
      { id: "gamberi", en: "Gamberi Fritti", ar: "جمبري فريتي", price: 175, desc: "Panko-crusted shrimp with dynamite sauce.", img: IMGS.shrimp },
      { id: "pollo", en: "Pollo Fritto", ar: "بولو فريتو", price: 120, desc: "Crispy chicken strips with sweet chili mayo.", img: IMGS.chickenStrips },
    ],
  },
  {
    id: "sand", en: "Sandwiches & Burgers", ar: "السندوتشات والبرجر",
    items: [
      { id: "s1", en: "Grilled Steak Sandwich", ar: "جريلد ستيك", price: 170, desc: "Ciabatta, sweet chili mayo, lettuce, pickles, caramelized onions, grilled steak, fries.", img: IMGS.steakSandwich },
      { id: "s2", en: "Grilled Chicken Sandwich", ar: "جريلد تشيكن", price: 160, desc: "Ciabatta, BBQ, lettuce, tomato, grilled chicken, American cheese, fries.", img: IMGS.chickenSandwich },
      { id: "s3", en: "Fried Shrimp Sandwich", ar: "فرايد شريمب", price: 210, desc: "Ciabatta, sweet chili, arugula, pickles, crispy shrimp, fries.", img: IMGS.shrimpSandwich },
      { id: "s4", en: "Salsiccia Sandwich", ar: "سجق", price: 170, desc: "Ciabatta, mayo, lettuce, tomato, grilled sausage, mushrooms, fries.", img: IMGS.sausage },
      { id: "s5", en: "Chicken Fajita", ar: "تشيكن فاهيتا", price: 165, desc: "Tortilla, chicken, fajita sauce, peppers, onions, fries.", img: IMGS.fajita },
      { id: "s6", en: "Beef Fajita", ar: "بيف فاهيتا", price: 185, desc: "Tortilla, beef slices, fajita sauce, peppers, onions, fries.", img: IMGS.fajita },
      { id: "s7", en: "Classic Beef Burger", ar: "كلاسيك بيف برجر", price: 180, desc: "Grilled beef patty, brioche, mayo, lettuce, tomato, pickles, onion rings, fries.", img: IMGS.beefBurger },
      { id: "s8", en: "Classic Chicken Burger", ar: "كلاسيك تشيكن برجر", price: 160, desc: "Crispy chicken, brioche, mayo, lettuce, pickles, fries.", img: IMGS.chickenBurger },
    ],
  },
  {
    id: "mains", en: "Secondi — Main Courses", ar: "الأطباق الرئيسية الفاخرة",
    items: [
      { id: "m1", en: "Chicken Piccata", ar: "تشيكن بيكاتا", price: 265, desc: "Grilled chicken in brown mushroom sauce, 2 sides.", img: IMGS.chickenPiccata },
      { id: "m2", en: "Pollo al Limone Cremoso", ar: "تشيكن ليمون كريم", price: 265, desc: "Grilled chicken in creamy lemon & herb sauce, 2 sides.", img: IMGS.chickenCream },
      { id: "m3", en: "Chicken Parmigiana", ar: "تشيكن بارميجان", price: 310, desc: "Panko chicken, tomato sauce, mozzarella & parmesan, fettuccine.", img: IMGS.parmigiana },
      { id: "m4", en: "Chicken Roll", ar: "تشيكن روول", price: 290, desc: "Chicken stuffed with red pepper & basil in pesto cream, 2 sides.", img: IMGS.chickenRoll },
      { id: "m5", en: "Filetto di Manzo", ar: "بيف فيليه", price: 380, desc: "Grilled beef fillet, creamy mushroom sauce, herbs, 2 sides.", img: IMGS.fillet },
      { id: "m6", en: "Costata di Manzo", ar: "ريب اى", price: 380, desc: "Grilled ribeye, creamy mushroom sauce, herbs, 2 sides.", img: IMGS.ribeye },
    ],
  },
  {
    id: "pizza", en: "Neapolitan Pizza", ar: "البيتزا النابولية",
    items: [
      { id: "p1", en: "Tosca Pizza", ar: "بيتزا توسكا", price: 280, desc: "Tomato, mozzarella, sausage, salami, beef ragout, peppers, basil.", img: IMGS.pizzaTosca },
      { id: "p2", en: "Chicken Ranch", ar: "تشيكن رانش", price: 270, img: IMGS.pizzaRanch },
      { id: "p3", en: "Chicken Barbecue", ar: "تشيكن باربكيو", price: 260, img: IMGS.pizzaBBQ },
      { id: "p4", en: "Pepperoni", ar: "بيبروني", price: 270, img: IMGS.pepperoni },
      { id: "p5", en: "Frutti di Mare", ar: "فروتي دي ماري", price: 320, img: IMGS.pizzaSeafood },
      { id: "p6", en: "Gamberi", ar: "جامبيري", price: 350, img: IMGS.pizzaShrimp },
      { id: "p7", en: "Margherita", ar: "مارجريتا", price: 155, img: IMGS.margherita },
    ],
  },
  {
    id: "pasta", en: "Fresh Pasta & Al Forno", ar: "المكرونات واللازانيا",
    items: [
      { id: "pa1", en: "Ravioli al Pollo", ar: "رافيولي تشيكن", price: 245, desc: "Chicken, ricotta and herbs in creamy basil sauce.", img: IMGS.ravioli },
      { id: "pa2", en: "Ravioli Quattro Formaggi", ar: "رافيولي كواترو فورماج", price: 235, img: IMGS.ravioliCheese },
      { id: "pa3", en: "Lasagna al Manzo", ar: "بيف لازانيا", price: 225, img: IMGS.lasagnaBeef },
      { id: "pa4", en: "Lasagna al Pollo", ar: "تشيكن لازانيا", price: 210, img: IMGS.lasagnaChicken },
      { id: "pa5", en: "Fettuccine Alfredo", ar: "فيتوتشيني الفريدو", price: 215, img: IMGS.alfredo },
      { id: "pa6", en: "Rigatoni al Pollo e Pesto", ar: "ريجاتوني بيستو", price: 220, img: IMGS.pesto },
      { id: "pa7", en: "Penne ai Gamberi al Limone", ar: "بيني جمبري ليمون", price: 280, img: IMGS.shrimpPasta },
      { id: "pa8", en: "Chicken Negresco", ar: "تشيكن نيجريسكو", price: 225, img: IMGS.negresco },
      { id: "pa9", en: "Mac and Cheese", ar: "ماك اند تشيز", price: 225, img: IMGS.macCheese },
      { id: "pa10", en: "Spaghetti Bolognese", ar: "سباجيتي بولونيز", price: 220, img: IMGS.bolognese },
      { id: "pa11", en: "Penne Arrabbiata", ar: "بيني اربياتا", price: 175, img: IMGS.arrabbiata },
      { id: "pa12", en: "Seafood Aglio e Olio", ar: "سيفود اليو اوليو", price: 300, img: IMGS.aglioOlio },
    ],
  },
  {
    id: "risotto", en: "Risotto & Zuppe", ar: "الريزوتو والشوربة",
    items: [
      { id: "r1", en: "Risotto al Tartufo e Funghi", ar: "ريزوتو ترافل مشروم", price: 250, img: IMGS.risottoMushroom },
      { id: "r2", en: "Risotto al Pollo e Pesto", ar: "ريزوتو تشيكن بيستو", price: 270, img: IMGS.risottoChicken },
      { id: "r3", en: "Risotto ai Frutti di Mare", ar: "ريزوتو سيفود", price: 320, img: IMGS.risottoSeafood },
      { id: "r4", en: "Pollo alla Crema Soup", ar: "شوربة تشيكن كريمة", price: 95, img: IMGS.soupChicken },
      { id: "r5", en: "Mix di Funghi Soup", ar: "شوربة مشروم", price: 90, img: IMGS.soupMushroom },
      { id: "r6", en: "Carciofo Soup", ar: "شوربة خرشوف", price: 90, img: IMGS.soupArt },
      { id: "r7", en: "Frutti di Mare Soup", ar: "شوربة سيفود", price: 170, img: IMGS.soupSeafood },
    ],
  },
  {
    id: "bakery", en: "Bakery & Desserts", ar: "المخبوزات والحلويات",
    items: [
      { id: "b1", en: "Croissant Plain", ar: "كرواسون سادة", price: 58, img: IMGS.croissantPlain },
      { id: "b2", en: "Croissant Cheese", ar: "كرواسون جبنة", price: 75, img: IMGS.croissantCheese },
      { id: "b3", en: "Croissant Mix Cheese", ar: "كرواسون ميكس جبنة", price: 80, img: IMGS.croissantCheese },
      { id: "b4", en: "Croissant Smoked Turkey", ar: "كرواسون تيركي", price: 80, img: IMGS.croissantTurkey },
      { id: "b5", en: "Croissant Nutella", ar: "كرواسون نوتيلا", price: 75, img: IMGS.croissantNutella },
      { id: "b6", en: "Croissant Pistachio", ar: "كرواسون فستق", price: 85, img: IMGS.croissantPistachio },
      { id: "b7", en: "Sandwich Mix Cheese", ar: "ساندوتش جبنة", price: 72, img: IMGS.sandwichCheese },
      { id: "b8", en: "Sandwich Smoked Turkey", ar: "ساندوتش تيركي", price: 78, img: IMGS.sandwichTurkey },
      { id: "b9", en: "Sandwich Tuna", ar: "ساندوتش تونة", price: 100, img: IMGS.sandwichTuna },
      { id: "d1", en: "Tiramisu", ar: "تيراميسو", price: 90, img: IMGS.tiramisu },
      { id: "d2", en: "Plain Cheesecake", ar: "تشيز كيك", price: 88, img: IMGS.cheesecake },
      { id: "d3", en: "Red Velvet", ar: "ريد فيلفيت", price: 89, img: IMGS.redVelvet },
      { id: "d4", en: "Molten Cake", ar: "مولتن كيك", price: 94, img: IMGS.molten },
      { id: "d5", en: "San Sebastian", ar: "سان سباستيان", price: 95, img: IMGS.sanSebastian },
      { id: "d6", en: "Chocolate Cake", ar: "شوكولاتة كيك", price: 90, img: IMGS.chocolateCake },
      { id: "d7", en: "Mousse", ar: "موس", price: 90, img: IMGS.mousse },
      { id: "d8", en: "Brownies", ar: "براوني", price: 84, img: IMGS.brownies },
      { id: "d9", en: "Waffle", ar: "وافل", price: 63, img: IMGS.waffle },
      { id: "d10", en: "Cinnamon", ar: "سينامون رول", price: 64, img: IMGS.cinnamon },
      { id: "d11", en: "Cookies", ar: "كوكيز", price: 63, img: IMGS.cookies },
    ],
  },
  {
    id: "drinks", en: "Coffee & Beverages", ar: "القهوة والمشروبات",
    items: [
      { id: "c1", en: "Mojito Classic", ar: "موهيتو كلاسيك", price: 80, img: IMGS.mojito },
      { id: "c2", en: "Mojito Blueberry", ar: "موهيتو توت", price: 90, img: IMGS.mojito },
      { id: "c3", en: "Mojito Passion Fruit", ar: "موهيتو باشون", price: 90, img: IMGS.mojito },
      { id: "c4", en: "Fresh Mango Juice", ar: "عصير مانجو", price: 80, img: IMGS.juice },
      { id: "c5", en: "Fresh Orange Juice", ar: "عصير برتقال", price: 60, img: IMGS.juice },
      { id: "c6", en: "Fresh Strawberry Juice", ar: "عصير فراولة", price: 70, img: IMGS.juice },
      { id: "c7", en: "Lemon Mint", ar: "ليمون بالنعناع", price: 60, img: IMGS.juice },
      { id: "c8", en: "Ice Latte", ar: "آيس لاتيه", price: 90, img: IMGS.iceLatte },
      { id: "c9", en: "Ice Spanish Latte", ar: "آيس سبانيش لاتيه", price: 105, img: IMGS.iceLatte },
      { id: "c10", en: "Frappé Caramel", ar: "فرابيه كراميل", price: 105, img: IMGS.frappe },
      { id: "c11", en: "Frappé Lotus", ar: "فرابيه لوتس", price: 110, img: IMGS.frappe },
      { id: "c12", en: "Frappé Pistachio", ar: "فرابيه فستق", price: 125, img: IMGS.frappe },
      { id: "c13", en: "Cola", ar: "كولا", price: 45, img: IMGS.cola },
      { id: "c14", en: "Redbull", ar: "ريدبول", price: 80, img: IMGS.redbull },
      { id: "c15", en: "Water", ar: "مياه", price: 10, img: IMGS.water },
      { id: "h1", en: "Tosca Coffee (Double)", ar: "قهوة توسكا", price: 50, img: IMGS.espresso },
      { id: "h2", en: "Espresso (Double)", ar: "إسبريسو", price: 50, img: IMGS.espresso },
      { id: "h3", en: "Latte (Double)", ar: "لاتيه", price: 90, img: IMGS.latte },
      { id: "h4", en: "Cappuccino (Double)", ar: "كابتشينو", price: 90, img: IMGS.cappuccino },
      { id: "h5", en: "Cortado (Double)", ar: "كورتادو", price: 80, img: IMGS.espresso },
      { id: "h6", en: "Flat White", ar: "فلات وايت", price: 85, img: IMGS.flatWhite },
      { id: "h7", en: "Italian Hot Chocolate (L)", ar: "هوت شوكليت إيطالي", price: 90, img: IMGS.hotChocolate },
      { id: "h8", en: "Hot Chocolate Nutella (L)", ar: "هوت شوكليت نوتيلا", price: 100, img: IMGS.hotChocolate },
      { id: "h9", en: "Karak Tea", ar: "شاي كرك", price: 50, img: IMGS.karak },
      { id: "h10", en: "Matcha", ar: "ماتشا", price: 70, img: IMGS.matcha },
      { id: "h11", en: "Sahleb", ar: "سحلب", price: 65, img: IMGS.sahleb },
      { id: "t1", en: "Topping Nutella", ar: "توبينج نوتيلا", price: 25, img: IMGS.nutella },
      { id: "t2", en: "Topping Nuts", ar: "توبينج مكسرات", price: 30, img: IMGS.nuts },
      { id: "t3", en: "Topping Blueberry", ar: "توبينج توت", price: 25, img: IMGS.blueberry },
    ],
  },
];

// ---------- Cart hook (in-memory) ----------
type CartLine = { item: Item; qty: number };

function useCart() {
  const [lines, setLines] = useState<Record<string, CartLine>>({});
  const add = (item: Item) => setLines((s) => ({
    ...s,
    [item.id]: { item, qty: (s[item.id]?.qty ?? 0) + 1 },
  }));
  const dec = (id: string) => setLines((s) => {
    const cur = s[id]; if (!cur) return s;
    if (cur.qty <= 1) { const { [id]: _, ...rest } = s; return rest; }
    return { ...s, [id]: { ...cur, qty: cur.qty - 1 } };
  });
  const remove = (id: string) => setLines((s) => { const { [id]: _, ...rest } = s; return rest; });
  const clear = () => setLines({});
  const items = Object.values(lines);
  const count = items.reduce((n, l) => n + l.qty, 0);
  const total = items.reduce((n, l) => n + l.qty * l.item.price, 0);
  return { items, count, total, add, dec, remove, clear };
}

// ---------- Component ----------
function Home() {
  const cart = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(MENU[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeCategory = useMemo(() => MENU.find((m) => m.id === activeTab)!, [activeTab]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen text-foreground">
      <Nav scrolled={scrolled} cartCount={cart.count} onCart={() => setCartOpen(true)} onNav={scrollTo} />
      <Hero onNav={scrollTo} />
      <MenuSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        category={activeCategory}
        onAdd={cart.add}
      />
      <Reviews />
      <Reserve />
      <Footer />

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onCheckout={() => { setCartOpen(false); setCheckoutOpen(true); }}
      />
      {checkoutOpen && (
        <CheckoutModal
          items={cart.items}
          total={cart.total}
          onClose={() => setCheckoutOpen(false)}
          onSent={() => { setCheckoutOpen(false); cart.clear(); }}
        />
      )}

      {/* Floating cart button (mobile) */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-5 right-5 z-40 md:hidden inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold"
        aria-label="Open cart"
      >
        🛒 <span>{cart.count}</span>
      </button>
    </div>
  );
}

function Nav({ scrolled, cartCount, onCart, onNav }: { scrolled: boolean; cartCount: number; onCart: () => void; onNav: (id: string) => void }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "reviews", label: "Reviews" },
    { id: "reserve", label: "Reserve" },
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 md:px-8 transition-all ${scrolled ? "glass rounded-b-2xl md:rounded-2xl md:mx-4" : ""}`}>
        <div className="flex items-center justify-between h-14">
          <button onClick={() => onNav("home")} className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold text-gold tracking-wide">TOSCA</span>
            <span className="hidden sm:inline text-xs text-muted-foreground arabic">توسكا</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.id} onClick={() => onNav(l.id)} className="text-sm font-medium text-foreground/85 hover:text-gold transition-colors">
                {l.label}
              </button>
            ))}
          </nav>
          <button onClick={onCart} className="relative inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold hover:bg-gold/20 transition">
            <span>Basket</span>
            <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-gradient-gold text-primary-foreground text-xs font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG("1513104890138-7c749659a591") + "&w=1600"}
          alt="Neapolitan pizza on a dark table"
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-20 md:py-28 text-center animate-fade-in">
        <p className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6">Since a taste of Italy · Damanhour</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
          TOSCA
          <span className="block text-gold italic font-medium text-3xl md:text-5xl mt-4 arabic">توسكا</span>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          A luxurious Italian dining experience — authentic Neapolitan pizza, hand-crafted pasta and
          specialty coffee in the heart of Damanhour.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNav("menu")}
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.02] transition"
          >
            Explore Menu
          </button>
          <button
            onClick={() => onNav("reviews")}
            className="inline-flex items-center justify-center rounded-full border border-gold/50 px-8 py-3.5 text-sm font-semibold text-gold hover:bg-gold/10 transition"
          >
            See Reviews
          </button>
        </div>
        <div className="mt-16 flex justify-center gap-8 text-xs md:text-sm text-muted-foreground">
          <div><span className="text-gold font-serif text-2xl">4.8</span><br />Rating</div>
          <div className="border-l border-gold/20 pl-8"><span className="text-gold font-serif text-2xl">80+</span><br />Signature dishes</div>
          <div className="border-l border-gold/20 pl-8"><span className="text-gold font-serif text-2xl">8am–1am</span><br />Every day</div>
        </div>
      </div>
    </section>
  );
}

function MenuSection({ activeTab, setActiveTab, category, onAdd }: {
  activeTab: string; setActiveTab: (id: string) => void; category: Category; onAdd: (i: Item) => void;
}) {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">La Carta</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold">Our Menu</h2>
          <p className="mt-4 text-muted-foreground">Every dish is crafted with imported Italian ingredients and served with love.</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 -mx-4 px-4 md:justify-center scrollbar-none">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition whitespace-nowrap ${
                activeTab === cat.id
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-gold/25 text-foreground/80 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {cat.en}
            </button>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gold">{category.en}</h3>
          <p className="text-muted-foreground mt-1 arabic text-lg">{category.ar}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((it) => (
            <MenuCard key={it.id} item={it} onAdd={() => onAdd(it)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, onAdd }: { item: Item; onAdd: () => void }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-card border border-border/70 hover:border-gold/60 transition-all hover:shadow-gold">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={item.img}
          alt={item.en}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = IMG("1504674900247-0877df9cc836"); }}
        />
        <div className="absolute top-3 right-3 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-bold text-gold border border-gold/40">
          {item.price} EGP
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="font-serif text-lg font-semibold leading-tight">{item.en}</h4>
            <p className="text-sm text-muted-foreground mt-0.5 arabic">{item.ar}</p>
          </div>
          <button
            onClick={onAdd}
            aria-label={`Add ${item.en} to basket`}
            className="shrink-0 h-10 w-10 rounded-full bg-gradient-gold text-primary-foreground text-xl font-bold shadow-gold hover:scale-110 transition"
          >
            +
          </button>
        </div>
        {item.desc && <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">{item.desc}</p>}
      </div>
    </article>
  );
}

function CartSidebar({ open, onClose, cart, onCheckout }: {
  open: boolean; onClose: () => void; cart: ReturnType<typeof useCart>; onCheckout: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-card border-l border-gold/25 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className="font-serif text-2xl text-gold">Your Basket</h3>
            <p className="text-xs text-muted-foreground arabic">السلة</p>
          </div>
          <button onClick={onClose} className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center text-xl">×</button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4" style={{ height: "calc(100% - 200px)" }}>
          {cart.items.length === 0 && (
            <div className="text-center text-muted-foreground py-16">
              <div className="text-5xl mb-3">🍽️</div>
              <p>Your basket is empty</p>
              <p className="text-xs mt-1 arabic">السلة فارغة</p>
            </div>
          )}
          {cart.items.map((l) => (
            <div key={l.item.id} className="flex gap-3 rounded-xl bg-muted/40 p-3">
              <img src={l.item.img} alt={l.item.en} className="h-16 w-16 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{l.item.en}</div>
                <div className="text-xs text-gold">{l.item.price} EGP</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => cart.dec(l.item.id)} className="h-7 w-7 rounded-full border border-border hover:bg-background">−</button>
                  <span className="text-sm w-6 text-center">{l.qty}</span>
                  <button onClick={() => cart.add(l.item)} className="h-7 w-7 rounded-full border border-border hover:bg-background">+</button>
                  <button onClick={() => cart.remove(l.item.id)} className="ml-auto text-xs text-destructive hover:underline">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 inset-x-0 border-t border-border bg-card p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-serif text-2xl text-gold">{cart.total} EGP</span>
          </div>
          <button
            disabled={cart.items.length === 0}
            onClick={onCheckout}
            className="w-full rounded-full bg-gradient-gold py-3.5 font-semibold text-primary-foreground shadow-gold disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] transition"
          >
            Place Order · طلب الآن
          </button>
        </div>
      </aside>
    </>
  );
}

function CheckoutModal({ items, total, onClose, onSent }: {
  items: CartLine[]; total: number; onClose: () => void; onSent: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"delivery" | "pickup">("delivery");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || name.trim().length > 60) return setError("الرجاء إدخال الاسم");
    if (!/^[0-9+\s-]{7,20}$/.test(phone)) return setError("رقم الهاتف غير صحيح");
    if (type === "delivery" && (!address.trim() || address.trim().length > 300)) return setError("الرجاء إدخال عنوان التوصيل");

    const lines = items.map((l) => `- ${l.qty} x ${l.item.en} / ${l.item.ar} (${l.item.price} EGP)`).join("\n");
    const msg =
`*طلب جديد من موقع توسكا - TOSCA* 🍕

*بيانات العميل:*
• الاسم: ${name.trim()}
• الهاتف: ${phone.trim()}
• طريقة الاستلام: ${type === "delivery" ? "توصيل للمنزل" : "استلام من المطعم"}${type === "delivery" ? `\n• العنوان: ${address.trim()}` : ""}

*الطلب:*
${lines}

*إجمالي الحساب:* ${total} EGP`;

    const url = `https://wa.me/201552224200?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    onSent();
  };

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <form onSubmit={submit} className="w-full max-w-lg rounded-3xl bg-card border border-gold/40 shadow-gold p-6 md:p-8 animate-scale-in">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-gold">Confirm Your Order</h3>
            <p className="text-sm text-muted-foreground arabic mt-1">تأكيد الطلب عبر واتساب</p>
          </div>
          <button type="button" onClick={onClose} className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center text-xl">×</button>
        </div>

        <div className="space-y-4">
          <Field label="الاسم / Name">
            <input value={name} onChange={(e) => setName(e.target.value)} maxLength={60} required
              className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none" />
          </Field>
          <Field label="رقم الهاتف / Phone">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} required inputMode="tel"
              placeholder="+20 ..." className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none" />
          </Field>
          <Field label="طريقة الاستلام / Order Type">
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => setType("delivery")}
                className={`rounded-xl py-3 text-sm font-medium border transition ${type === "delivery" ? "bg-gradient-gold text-primary-foreground border-transparent" : "border-border hover:border-gold/50"}`}>
                🛵 Home Delivery
              </button>
              <button type="button" onClick={() => setType("pickup")}
                className={`rounded-xl py-3 text-sm font-medium border transition ${type === "pickup" ? "bg-gradient-gold text-primary-foreground border-transparent" : "border-border hover:border-gold/50"}`}>
                🏛️ Pickup
              </button>
            </div>
          </Field>
          {type === "delivery" && (
            <Field label="العنوان بالتفصيل / Delivery Address">
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} maxLength={300} rows={2}
                className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none resize-none" />
            </Field>
          )}
        </div>

        {error && <p className="mt-4 text-sm text-destructive arabic">{error}</p>}

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-muted/40 px-4 py-3">
          <span className="text-sm text-muted-foreground">إجمالي الحساب</span>
          <span className="font-serif text-2xl text-gold">{total} EGP</span>
        </div>

        <button type="submit" className="mt-6 w-full rounded-full bg-gradient-gold py-3.5 font-semibold text-primary-foreground shadow-gold hover:scale-[1.01] transition">
          Confirm Order via WhatsApp · تأكيد الطلب
        </button>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Reviews() {
  const reviews = [
    { name: "Youssef A.", text: "Best Neapolitan pizza in Damanhour, the crust is perfection. The atmosphere feels straight out of Naples.", rating: 5 },
    { name: "Salma H.", text: "Cozy, romantic and the tiramisu is unreal. Service is genuinely warm. My new favourite place.", rating: 5 },
    { name: "Ahmed K.", text: "The Ravioli al Pollo and Tosca coffee — absolutely stunning. Feels like a proper Italian trattoria.", rating: 5 },
    { name: "Nour M.", text: "Beautiful interior, great music and the ribeye is cooked to perfection. Highly recommend.", rating: 4 },
  ];
  return (
    <section id="reviews" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Guests Love Tosca</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold">4.8 <span className="text-gold">★</span></h2>
          <p className="mt-2 text-muted-foreground">out of 5 stars — from hundreds of guests</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/70 p-6 md:p-8 hover:border-gold/40 transition">
              <div className="text-gold text-lg tracking-widest">{"★".repeat(r.rating)}<span className="text-muted-foreground/40">{"★".repeat(5 - r.rating)}</span></div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <p className="mt-4 text-sm text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reserve() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^[0-9+\s-]{7,20}$/.test(phone) || !date) return;
    const msg =
`*حجز طاولة - TOSCA*
• الاسم: ${name.trim()}
• الهاتف: ${phone.trim()}
• التاريخ: ${date}
• الوقت: ${time}
• عدد الضيوف: ${guests}`;
    window.open(`https://wa.me/201552224200?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const times = ["12:00","13:00","14:00","18:00","19:00","20:00","21:00","22:00","23:00"];

  return (
    <section id="reserve" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="rounded-3xl border border-gold/30 bg-card p-8 md:p-12 shadow-gold">
          <div className="text-center mb-8">
            <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Reserve</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Reserve a Table</h2>
            <p className="mt-3 text-muted-foreground arabic">احجز طاولتك في توسكا</p>
          </div>
          <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
            <Field label="Name / الاسم">
              <input required maxLength={60} value={name} onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none" />
            </Field>
            <Field label="Phone / الهاتف">
              <input required maxLength={20} value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none" />
            </Field>
            <Field label="Date / التاريخ">
              <input required type="date" value={date} onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none" />
            </Field>
            <Field label="Time / الوقت">
              <select value={time} onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none">
                {times.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Guests / عدد الضيوف">
              <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-xl bg-input/50 border border-border focus:border-gold px-4 py-3 outline-none">
                {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
              </select>
            </Field>
            <div className="md:col-span-2 mt-2">
              <button type="submit" className="w-full rounded-full bg-gradient-gold py-3.5 font-semibold text-primary-foreground shadow-gold hover:scale-[1.01] transition">
                {sent ? "Reservation Sent ✓" : "Reserve Now · احجز الآن"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal/60 py-16 mt-8">
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-3xl text-gold font-bold">TOSCA</div>
          <p className="mt-2 text-sm text-muted-foreground arabic">توسكا — مطعم إيطالي فاخر</p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">A luxurious Italian dining experience in Damanhour, Egypt.</p>
        </div>
        <div>
          <h4 className="font-serif text-lg text-gold mb-3">Visit Us</h4>
          <p className="text-sm text-muted-foreground">Qortasa, Damanhour</p>
          <p className="text-sm text-muted-foreground">Beheira Governorate, Egypt</p>
          <p className="mt-3 text-sm text-muted-foreground">Open daily: 8:00 AM — 1:00 AM</p>
          <a href="https://maps.app.goo.gl/L4xiDRYWrovMsnYs7" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-gold hover:underline">
            Open in Google Maps →
          </a>
        </div>
        <div>
          <h4 className="font-serif text-lg text-gold mb-3">Contact</h4>
          <a href="tel:+201552224200" className="block text-sm text-muted-foreground hover:text-gold">+20 15 52224200</a>
          <a href="https://wa.me/201552224200" target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-gold mt-1">WhatsApp Order</a>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold/10">
              IG
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold/10">
              FB
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-8 mt-10 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TOSCA — توسكا. All rights reserved.
      </div>
    </footer>
  );
}