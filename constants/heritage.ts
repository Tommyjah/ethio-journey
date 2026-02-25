import { Language } from '../types';

export interface HeritageSite {
  id: string;
  slug: string;
  name: { [key in Language]: string };
  description: { [key in Language]: string };
  history: { [key in Language]: string };
  highlights: { [key in Language]: string[] };
  travelTips: { [key in Language]: { bestTime: string; weather: string; customs: string } };
  gallery: string[];
  coverImage: string;
  icon: string;
}

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'lalibela',
    slug: 'lalibela',
    name: {
      [Language.EN]: 'Lalibela',
      [Language.AM]: 'ላሊበላ'
    },
    description: {
      [Language.EN]: 'A UNESCO World Heritage site featuring 11 medieval monolithic cave churches',
      [Language.AM]: '11 የቀጣይ ዘመን የወንድ እንዳያደረገው የአለም ትራቕ ቅርስ'
    },
    history: {
      [Language.EN]: `Lalibela is a town in northern Ethiopia that serves as a major pilgrimage site for Ethiopian Orthodox Christians. It was built in the 12th century by King Gebre Mesqel Lalibela, who sought to create a "New Jerusalem" for Ethiopian Christians who could not travel to the Holy Land.

The 11 churches of Lalibela were carved directly from solid rock, a remarkable feat of engineering and devotion. Each church is interconnected by a network of tunnels and passageways, creating an intricate underground complex.

Lalibela remains one of the most important religious sites in Ethiopia, attracting thousands of pilgrims each year, particularly during the colorful Timkat festival.`,
      [Language.AM]: `ላሊበላ በሰሜን ኢትዮጵያ ውስጥ ያለው ከተማ ነው በኢትዮጵያ አርቶዶክስ ክርስቲያኖች ውስጥ ትልቅ ግዛት ለሚወስኑት ይገኛል። በ12ኛው ክፍለ ዘመን በንጉሱ ገብረ መስቀል ላሊበላ አንዱ አዳራሽ ተሰራችው ነው በቅዱስ ምድር ላይ መጓዝ የማይችሉትን ኢትዮጵያ ክርስቲያኖችን ለማንበብ "አዳራሽ ኢሩሳሌም"ን መፍጠር ተሰራችው ነው።

ላሊበላ 11 ቤተ ክርስቲያን በጠንካራ ድንጋይ ተቀናቃል ለማከራተያ ተረጉም የተሰራቀቁ ከመንገድ ላይ የማይመለከተው የህንጻን ተራክቶችን ይያዉት። እያንዳንዱ ቤተ ክርስቲያ በቀላልነት የሚገኛውን የአፈር ደረጃ እና የመጓዝ መንገዶች በማገናኛ ይገኛል።

ላሊበላ በኢትዮጵያ ውስጥ በጣም አስፈላጊ ትራቕ ቦታ ነው በዓመት በሚደረገው ግዛት ቦታዎች ውስጥ በተለይ በቀጣይ ወቅት በሚደረገው ትምክት ውስጥ በትላልቅ ብዛት ለሚወስኑት ይገኛል።`
    },
    highlights: {
      [Language.EN]: [
        'Biete Medhane Alem - The largest monolithic church in Lalibela',
        'Biete Giyorgis - The iconic rock-hewn church shaped like a cross',
        'Biete Maryam - One of the most sacred churches in Lalibela',
        'Biete Amanuel - A church known for its beautiful carvings'
      ],
      [Language.AM]: [
        'ቤተ መድህአን አለም - በላሊበላ ውስጥ ትልቅ የወንድ እንዳያደረገው ቤተ ክርስቲያ',
        'ቤተ ጊዮርጊስ - በአምላክ ትርጉም የተሰራቀቀ ተቀናቃል የቤተ ክርስቲያ',
        'ቤተ ማርያም - በላሊበላ ውስጥ በጣም አስፈላጊ ቤተ ክርስቲያ',
        'ቤተ አማኑኤል - በጣም ትልቅ ትረት ያለው ቤተ ክርስቲያ'
      ]
    },
    travelTips: {
      [Language.EN]: {
        bestTime: 'October to February (dry season)',
        weather: 'Cool temperatures year-round, with warm days and cool nights',
        customs: 'Dress modestly, cover shoulders and knees when visiting churches'
      },
      [Language.AM]: {
        bestTime: 'ኦክተውበር እስከ ፌብሩወሪ (ነፃ ወቅት)',
        weather: 'በዓመት በሚደረገው ቀን መጠኑ በአማካይ ይሆናል በጨለወት በሙሉ ቀን ይሆናል',
        customs: 'በቀጣይ ተራንት በመተው በቤተ ክርስቲያ በሚገኙበት ስፍራ በመተው በቀጣይ ተራንት በመተው'
      }
    },
    gallery: [
      '/images/tour-lalibela1.webp',
      '/images/lalibela.jpg',
      '/images/tour_lal.jpg',
      '/images/tour-lalibelanight.jpg'
    ],
    coverImage: '/images/tour-lalibela1.webp',
    icon: '🏛️'
  },
  {
    id: 'axum',
    slug: 'axum',
    name: {
      [Language.EN]: 'Axum',
      [Language.AM]: 'አክሱም'
    },
    description: {
      [Language.EN]: 'An ancient civilization known for its massive obelisks and historical significance',
      [Language.AM]: 'አንድ ታሪክ ቦታ በአህጉር ለሚታይ የመንግስት ትራቕ ቦታ'
    },
    history: {
      [Language.EN]: `Axum is one of the oldest continuously inhabited cities in Africa and was the capital of the ancient Axumite Kingdom. This powerful civilization flourished from the 1st to the 8th centuries AD, controlling vast territories in the Horn of Africa and southern Arabia.

Axum is most famous for its massive granite obelisks, or stelae, which were carved and erected between the 3rd and 4th centuries. These towering monuments, some standing over 30 meters tall, mark the graves of Axumite kings and nobles.

The city also played a crucial role in the spread of Christianity in Ethiopia, with the famous Ark of the Covenant believed to be housed in Axum.`,
      [Language.AM]: `አክሱም በአፍሪካ ውስጥ በጣም ትሪክ ቦታ ነው እና በአንደድ አዳራሽ ተሃላ ትራቕ ቦታ ነው። ይህ ታሪክ ቦታ በ1ኛ እስከ 8ኛው ክፍለ ዘመን በአፍሪካ እና በደቡብ አረብ በተሰራቀቀ የተሰራቀቁ የመንግስት ትራቕ ቦታዎችን ይወስኑት።

አክሱም በጣም ትልቅ ተቀናቃል የሚታይ የመንግስት ቦታ ነው በ3ኛ እስከ 4ኛው ክፍለ ዘመን በተሰራቀቀ የተሰራቀቁ የመንግስት ትራቕ ቦታዎችን ይወስኑት። እነዚህ ትልቅ ተቀናቃል የሚታይ የመንግስት ቦታዎች በአክሱም በተሰራቀቀ የተሰራቀቁ የመንግስት ትራቕ ቦታዎችን ይወስኑት።

አክሱም በኢትዮጵያ ውስጥ በክርስቲያን እስከ አክሱም በሚደረገው ትራቕ ቦታዎች ውስጥ በተለይ በቀጣይ ወቅት በሚደረገው ትምክት ውስጥ በትላልቅ ብዛት ለሚወስኑት ይገኛል።`
    },
    highlights: {
      [Language.EN]: [
        'King Ezana\'s Stela - The tallest standing obelisk in Axum',
        'The Church of Our Lady Mary of Zion - Ethiopia\'s most sacred church',
        'Obelisk Park - A collection of ancient stelae',
        'Queen of Sheba\'s Palace - Ruins of an ancient royal residence'
      ],
      [Language.AM]: [
        'ንጉሱ እዛናን አዳራሽ - በአክሱም ውስጥ ትልቅ የወንድ እንዳያደረገው ተቀናቃል',
        'ቤተ ክርስቲያ እዛናን አዳራሽ - በኢትዮጵያ ውስጥ በጣም አስፈላጊ ቤተ ክርስቲያ',
        'ተቀናቃል ድረስ - በአክሱም ውስጥ ትልቅ ትልቅ ትልቅ ትልቅ ትልቅ ትልቅ ትልቅ ትልቅ ትልቅ ትልቅ ትልቅ',
        'ንጉሱ እዛናን አዳራሽ - በአክሱም ውስጥ ትልቅ የወንድ እንዳያደረገው ተቀናቃል'
      ]
    },
    travelTips: {
      [Language.EN]: {
        bestTime: 'October to April (dry season)',
        weather: 'Warm temperatures year-round, with occasional rain',
        customs: 'Respect local traditions and dress modestly'
      },
      [Language.AM]: {
        bestTime: 'ኦክተውበር እስከ አፕሪል (ነፃ ወቅት)',
        weather: 'በዓመት በሚደረገው ቀን መጠኑ በአማካይ ይሆናል በጨለወት በሙሉ ቀን ይሆናል',
        customs: 'በቀጣይ ተራንት በመተው በቤተ ክርስቲያ በሚገኙበት ስፍራ በመተው በቀጣይ ተራንት በመተው'
      }
    },
    gallery: [
      '/images/tour-axumnew.webp',
      '/images/axum.jpg',
      '/images/tour-axum1.jpg',
      '/images/tour_cityadwa2.jpg'
    ],
    coverImage: '/images/tour-axumnew.webp',
    icon: '🏰'
  },
  {
    id: 'gondar',
    slug: 'gondar',
    name: {
      [Language.EN]: 'Gondar',
      [Language.AM]: 'ጎንዳር'
    },
    description: {
      [Language.EN]: 'A historical city with impressive castles and palaces',
      [Language.AM]: 'አንድ ታሪክ ቦታ በአህጉር ለሚታይ የመንግስት ትራቕ ቦታ'
    },
    history: {
      [Language.EN]: `Gondar, located in northern Ethiopia, was the capital of the Ethiopian Empire from the 17th to the 19th centuries. It is known for its impressive collection of castles and palaces, earning it the nickname "the Camelot of Africa".

The most famous structure in Gondar is Fasil Ghebbi, a UNESCO World Heritage site that includes several castles, palaces, and churches surrounded by a defensive wall. This architectural complex was built by various Ethiopian emperors over a period of 200 years.

Gondar also served as an important center of religion and culture, with numerous churches and monasteries in the surrounding area.`,
      [Language.AM]: `ጎንዳር በሰሜን ኢትዮጵያ ውስጥ ያለው ከተማ ነው በ17ኛ እስከ 19ኛው ክፍለ ዘመን በኢትዮጵያ ኢምፓይር አዳራሽ ተሃላ ትራቕ ቦታ ነው። ይህ ታሪክ ቦታ በአህጉር ለሚታይ የመንግስት ትራቕ ቦታ ነው በተለይ በቀጣይ ወቅት በሚደረገው ትምክት ውስጥ በትላልቅ ብዛት ለሚወስኑት ይገኛል።

ጎንዳር በጣም ትልቅ ተቀናቃል የሚታይ የመንግስት ቦታ ነው በFasil Ghebbi በተሰራቀቀ የተሰራቀቁ የመንግስት ትራቕ ቦታዎችን ይወስኑት። ይህ ተቀናቃል በአክሱም በተሰራቀቀ የተሰራቀቁ የመንግስት ትራቕ ቦታዎችን ይወስኑት።

ጎንዳር በኢትዮጵያ ውስጥ በክርስቲያን እስከ አክሱም በሚደረገው ትራቕ ቦታዎች ውስጥ በተለይ በቀጣይ ወቅት በሚደረገው ትምክት ውስጥ በትላልቅ ብዛት ለሚወስኑት ይገኛል።`
    },
    highlights: {
      [Language.EN]: [
        'Fasil Ghebbi - The Royal Enclosure with multiple castles',
        'Debre Berhan Selassie Church - Famous for its ceiling paintings',
        'Qusquam Church - A beautiful church with intricate carvings',
        'Gondar Castle - The main castle of the complex'
      ],
      [Language.AM]: [
        'ፋሲል ገብይ - በጎንዳር ውስጥ ትልቅ የወንድ እንዳያደረገው ተቀናቃል',
        'ደብረ በርሃን ሰላሴ ቤተ ክርስቲያ - በጎንዳር ውስጥ ትልቅ ትልቅ ትልቅ ትልቅ',
        'ቁስኳም ቤተ ክርስቲያ - በጎንዳር ውስጥ ትልቅ ትልቅ ትልቅ',
        'ጎንዳር ቀሎ - በጎንዳር ውስጥ ትልቅ ትልቅ'
      ]
    },
    travelTips: {
      [Language.EN]: {
        bestTime: 'October to May (dry season)',
        weather: 'Mild temperatures year-round, with warm days and cool nights',
        customs: 'Dress modestly and respect religious sites'
      },
      [Language.AM]: {
        bestTime: 'ኦክተውበር እስከ ማየኛ (ነፃ ወቅት)',
        weather: 'በዓመት በሚደረገው ቀን መጠኑ በአማካይ ይሆናል በጨለወት በሙሉ ቀን ይሆናል',
        customs: 'በቀጣይ ተራንት በመተው በቤተ ክርስቲያ በሚገኙበት ስፍራ በመተው በቀጣይ ተራንት በመተው'
      }
    },
    gallery: [
      '/images/tour_minilik.jpg',
      '/images/tour_citycbe.jpg',
      '/images/tour_city9.jpg',
      '/images/tour_panacity.jpg'
    ],
    coverImage: '/images/tour_minilik.jpg',
    icon: '🏰'
  },
  {
    id: 'harar',
    slug: 'harar',
    name: {
      [Language.EN]: 'Harar',
      [Language.AM]: 'ሐረር'
    },
    description: {
      [Language.EN]: 'An ancient walled city with rich cultural traditions',
      [Language.AM]: 'አንድ ታሪክ ቦታ በአህጉር ለሚታይ የመንግስት ትራቕ ቦታ'
    },
    history: {
      [Language.EN]: `Harar is an ancient walled city in eastern Ethiopia known for its rich cultural traditions and unique architecture. It is one of the oldest continuously inhabited cities in Africa, with a history dating back over 1,000 years.

The city is surrounded by a 5-kilometer long wall, built in the 16th century, which encloses 82 mosques and hundreds of traditional houses. Harar is considered the fourth holiest city in Islam, after Mecca, Medina, and Jerusalem.

Harar is also famous for its unique tradition of feeding wild hyenas, which has become a major tourist attraction. This practice dates back hundreds of years and is believed to bring good luck to the city.`,
      [Language.AM]: `ሐረር በምስራቅ ኢትዮጵያ ውስጥ ያለው ከተማ ነው በአህጉር ለሚታይ የመንግስት ትራቕ ቦታ ነው። ይህ ታሪክ ቦታ በ1000 ዓመታት በስተጀርባ በአፍሪካ ውስጥ በጣም ትሪክ ቦታ ነው።

ሐረር በ16ኛው ክፍለ ዘመን በተሰራቀቀ 5 ኪሎሜትር ርዝመት በሚሆነው በአክሱም በተሰራቀቀ የተሰራቀቁ የመንግስት ትራቕ ቦታዎችን ይወስኑት። ሐረር በአማካይ የእስላም ትራቕ ቦታ ነው በተለይ በቀጣይ ወቅት በሚደረገው ትምክት ውስጥ በትላልቅ ብዛት ለሚወስኑት ይገኛል።

ሐረር በአክሱም በተሰራቀቀ የተሰራቀቁ የመንግስት ትራቕ ቦታዎችን ይወስኑት በተለይ በቀጣይ ወቅት በሚደረገው ትምክት ውስጥ በትላልቅ ብዛት ለሚወስኑት ይገኛል።`
    },
    highlights: {
      [Language.EN]: [
        'Harar Jugol - The ancient walled city with traditional architecture',
        'Hyena Feeding - A unique cultural tradition',
        'Debre Harar Medhane Alem Church - A beautiful church in the city',
        'Harar Museum - Learn about the city\'s history and culture'
      ],
      [Language.AM]: [
        'ሐረር ዩጎል - በሐረር ውስጥ ትልቅ የወንድ እንዳያደረገው ተቀናቃል',
        'ሃይና አመጋገብ - በሐረር ውስጥ ትልቅ ትልቅ ትልቅ',
        'ደብረ ሐረር መድህአን አለም ቤተ ክርስቲያ - በሐረር ውስጥ ትልቅ ትልቅ',
        'ሐረር ሙዚየም - በሐረር ውስጥ ትልቅ ትልቅ'
      ]
    },
    travelTips: {
      [Language.EN]: {
        bestTime: 'October to March (cooler season)',
        weather: 'Hot temperatures year-round, with occasional rain',
        customs: 'Respect local traditions and be cautious around hyenas'
      },
      [Language.AM]: {
        bestTime: 'ኦክተውበር እስከ ማርች (ነፃ ወቅት)',
        weather: 'በዓመት በሚደረገው ቀን መጠኑ በአማካይ ይሆናል በጨለወት በሙሉ ቀን ይሆናል',
        customs: 'በቀጣይ ተራንት በመተው በቤተ ክርስቲያ በሚገኙበት ስፍራ በመተው በቀጣይ ተራንት በመተው'
      }
    },
    gallery: [
      '/images/tour-harar1.jpg',
      '/images/tour-harar.jpg',
      '/images/tour-city4.webp',
      '/images/tour-city6.jpg'
    ],
    coverImage: '/images/tour-harar1.jpg',
    icon: '🕌'
  }
];
