/* =====================
   TRANSLATIONS
   ===================== */
const DEFAULT_TRANSLATIONS = {
  fi: {
    'nav.discover': 'Löydä',
    'nav.feed': 'Tapahtumat & Alennukset',
    'nav.admin': 'Hallintaportaali',
    'nav.signin': 'Kirjaudu sisään',
    'nav.addCenter': '+ Lisää Keskus',
    'nav.logout': 'Kirjaudu ulos',

    'hero.eyebrow': 'Kauppakeskushakemisto',
    'hero.title': 'Löydä <em>Kauppakeskukset</em><br>Läheltäsi',
    'hero.sub': 'Selaa kauppakeskuksia, tutustu liikkeisiin ja pysy ajan tasalla tapahtumista ja tarjouksista.',
    'hero.searchPlaceholder': 'Hae nimellä tai kaupungilla…',
    'hero.searchBtn': 'Hae',
    'hero.statCenters': 'Keskusta',
    'hero.statPosts': 'Julkaisua',
    'hero.statCities': 'Kaupunkia',

    'filter.all': 'Kaikki',
    'filter.favorites': 'Suosikit',
    'filter.mall': 'Kauppakeskukset',
    'filter.outlet': 'Outlet-keskukset',

    'storecat.fashion':'Muoti',
    'storecat.foodDrink':'Ravintolat & Kahvilat',
    'storecat.electronics':'Elektroniikka',
    'storecat.sports':'Urheilu',
    'storecat.beauty':'Kauneus',
    'storecat.home':'Koti',
    'storecat.entertainment':'Viihde',
    'storecat.services':'Palvelut',
    'storecat.health':'Terveys',
    'storecat.other':'Muu',

    'discover.sectionLabel': 'Kauppakeskukset',

    'card.open': 'Auki',
    'card.closed': 'Suljettu',
    'card.salesOn': 'Alennukset',
    'card.events': 'Tapahtumat',
    'card.favorite': 'Lisää suosikkeihin',
    'card.favorited': 'Suosikki',
    'card.favoriteAdded': 'Lisätty suosikkeihin',
    'card.favoriteRemoved': 'Poistettu suosikeista',

    'detail.back': '← Takaisin',
    'detail.about': 'Tietoa',
    'detail.centerDetails': 'Tiedot',
    'detail.type': 'Tyyppi',
    'detail.hours': 'Aukioloajat',
    'detail.stores': 'Liikkeet',
    'detail.parking': 'Pysäköinti',
    'detail.phone': 'Puhelin',
    'detail.website': 'Verkkosivusto',
    'detail.floors': 'Kerrokset & Alueet',
    'detail.latestPosts': 'Viimeisimmät julkaisut',
    'detail.noPosts': 'Ei julkaisuja vielä.',
    'detail.openMaps': 'Avaa Google Mapsissa ↗',
    'detail.amenities': 'Palvelut',
    'detail.openNow': 'Auki nyt',
    'detail.closedToday': 'Suljettu tänään',

    'feed.title': 'Tapahtumat & Alennusfeed',
    'feed.subtitle': 'Viimeisimmät uutiset kaikista kauppakeskuksista',
    'feed.filterSale': 'Alennukset',
    'feed.filterEvent': 'Tapahtumat',
    'feed.filterNews': 'Uutiset',
    'feed.emptyTitle': 'Ei vielä mitään',
    'feed.emptyDesc': 'Kauppakeskukset eivät ole vielä julkaisseet mitään.',
    'feed.discount': 'Jopa',
    'feed.discountOff': '% alennusta',
    'feed.unknownCenter': 'Tuntematon keskus',

    'admin.title': 'Hallintaportaali',
    'admin.subtitle': 'Hallitse kauppakeskuksiasi ja julkaise sisältöä',
    'admin.sidebarCenters': 'Keskukset',
    'admin.myCenters': 'Omat Keskukset',
    'admin.addCenter': 'Lisää Keskus',
    'admin.sidebarContent': 'Sisältö',
    'admin.allPosts': 'Kaikki Julkaisut',
    'admin.newPost': 'Uusi Julkaisu',
    'admin.sidebarUsers': 'Käyttäjät',
    'admin.manageUsers': 'Hallitse käyttäjiä',
    'admin.centersTitle': 'Kaikki Keskukset',
    'admin.addCenterBtn': '+ Lisää Keskus',
    'admin.noCenters': 'Ei lisättyjä keskuksia',
    'admin.noCentersDesc': 'Lisää ensimmäinen kauppakeskuksesi aloittaaksesi.',
    'admin.colName': 'Nimi',
    'admin.colCity': 'Kaupunki',
    'admin.colType': 'Tyyppi',
    'admin.colStatus': 'Tila',
    'admin.colActions': 'Toiminnot',
    'admin.edit': 'Muokkaa',
    'admin.delete': 'Poista',

    'admin.postsTitle': 'Kaikki Julkaisut',
    'admin.newPostBtn': '+ Uusi Julkaisu',
    'admin.noPosts': 'Ei julkaisuja vielä',
    'admin.noPostsDesc': 'Aloita julkaisemalla tapahtumia, alennuksia ja uutisia.',
    'admin.colTitle': 'Otsikko',
    'admin.colCenter': 'Keskus',
    'admin.colPostType': 'Tyyppi',
    'admin.colDate': 'Päivämäärä',

    'admin.usersTitle': 'Käyttäjähallinta',
    'admin.usersSubtitle': 'Muokkaa salasanoja tai vaihda hallinnoitua keskusta.',
    'admin.colUser': 'Käyttäjä',
    'admin.colRole': 'Rooli',
    'admin.colManages': 'Hallinnoi',
    'admin.roleAdmin': 'Pääkäyttäjä',
    'admin.roleManager': 'Hallinnoija',
    'admin.editUserTitle': 'Muokkaa käyttäjää',
    'admin.newPassword': 'Uusi salasana',
    'admin.newPasswordHint': 'Jätä tyhjäksi, jos et halua muuttaa.',
    'admin.assignCenter': 'Hallinnoitava keskus',
    'admin.saveUser': 'Tallenna',
    'admin.userSaved': 'Käyttäjä tallennettu.',

    'form.addCenterTitle': 'Lisää Uusi Kauppakeskus',
    'form.editCenterTitle': 'Muokkaa Keskusta',
    'form.addCenterSubtitle': 'Täytä uuden kauppakeskuksen tiedot.',
    'form.editCenterSubtitle': 'Päivitä kauppakeskuksen tiedot.',
    'form.name': 'Nimi *',
    'form.city': 'Kaupunki *',
    'form.address': 'Katuosoite',
    'form.zip': 'Postinumero',
    'form.type': 'Tyyppi',
    'form.status': 'Tila',
    'form.statusOpen': 'Auki',
    'form.statusClosed': 'Suljettu',
    'form.phone': 'Puhelinnumero',
    'form.website': 'Verkkosivusto',
    'form.hours': 'Aukioloajat',
    'form.stores': 'Liikemäärä',
    'form.parking': 'Pysäköinti',
    'form.icon': 'Tunnus',
    'form.description': 'Kuvaus',
    'form.descPlaceholder': 'Lyhyt kuvaus kauppakeskuksesta…',
    'form.floors': 'Kerrokset / Alueet',
    'form.floorsHint': 'Jokainen kohde näytetään erillisenä korttina.',
    'form.floorsPlaceholder': 'Muoti, Ruokakeskus, Elektroniikka, Urheilu',
    'form.amenities': 'Palvelut',
    'form.amenitiesPlaceholder': 'Ilmainen WiFi, Lastenhuone, ATM, Invalidiparkki',
    'form.cardColor': 'Kortin taustaväri',
    'form.save': 'Tallenna Muutokset',
    'form.addBtn': 'Lisää Keskus',
    'form.cancel': 'Peruuta',
    'form.nameRequired': 'Nimi on pakollinen',
    'form.cityRequired': 'Kaupunki on pakollinen',
    'form.centerAdded': 'Keskus lisätty!',
    'form.centerUpdated': 'Keskus päivitetty!',
    'form.autoStatus': 'Automaattinen (Suomen aika)',
    'form.autoStatusHint': 'Tila lasketaan aukioloaikojen perusteella automaattisesti.',
    'form.weeklyHours': 'Viikon aukioloajat',
    'form.closedDay': 'Suljettu',

    'form.postTitle': 'Luo Uusi Julkaisu',
    'form.postSubtitle': 'Julkaise alennus, tapahtuma tai tiedote kaikille kävijöille.',
    'form.selectCenter': 'Valitse Keskus *',
    'form.selectCenterOption': '— Valitse keskus —',
    'form.noCenters': 'Ei keskuksia — lisää ensin keskus.',
    'form.postType': 'Julkaisutyyppi',
    'form.postTypeSale': 'Alennus',
    'form.postTypeEvent': 'Tapahtuma',
    'form.postTypeNews': 'Uutinen / Tiedote',
    'form.postTitleField': 'Otsikko *',
    'form.postTitlePlaceholder': 'esim. Kesäalennukset — jopa 50% alennusta!',
    'form.postDesc': 'Kuvaus',
    'form.postDescPlaceholder': 'Lisätietoja tästä julkaisusta…',
    'form.startDate': 'Alkupäivä',
    'form.endDate': 'Loppupäivä',
    'form.discount': 'Alennus %',
    'form.discountHint': '(vain alennuksille)',
    'form.publish': 'Julkaise',
    'form.postPublished': 'Julkaisu julkaistu!',
    'form.centerRequired': 'Valitse keskus',
    'form.postTitleRequired': 'Otsikko on pakollinen',

    'modal.cancel': 'Peruuta',
    'modal.delete': 'Poista',
    'modal.deleteCenterTitle': 'Poista Keskus',
    'modal.deleteCenterMsg': 'Haluatko varmasti poistaa "{name}"? Tämä poistaa myös kaikki sen julkaisut.',
    'modal.deletePostTitle': 'Poista Julkaisu',
    'modal.deletePostMsg': 'Poistetaanko "{name}"?',
    'modal.centerDeleted': 'Keskus poistettu',
    'modal.postDeleted': 'Julkaisu poistettu',

    'stores.tab': 'Liikkeet',
    'stores.tabDining': 'Ravintolat & Kahvilat',
    'stores.tabServices': 'Palvelut',
    'stores.sectionTitle': 'Liikehakemisto',
    'stores.search': 'Hae liikettä…',
    'stores.searchDining': 'Hae ravintolaa tai kahvilaa…',
    'stores.searchServices': 'Hae palvelua…',
    'stores.filterAll': 'Kaikki kategoriat',
    'stores.noStores': 'Ei liikkeitä vielä.',
    'stores.noStoresDesc': 'Lisää ensimmäinen liike tähän kauppakeskukseen.',
    'stores.floor': 'Kerros',
    'stores.phone': 'Puhelin',
    'stores.hours': 'Aukioloajat',
    'stores.weekdays': 'Ma–Pe',
    'stores.saturday': 'La',
    'stores.sunday': 'Su',
    'stores.website': 'Verkkosivusto',
    'stores.count': 'liikettä',

    'admin.storesTitle': 'Liikkeet',
    'admin.addStore': 'Lisää Liike',
    'admin.addStoreBtn': '+ Lisää Liike',
    'admin.noStores': 'Ei liikkeitä',
    'admin.noStoresDesc': 'Lisää liikkeitä tähän kauppakeskukseen.',
    'admin.addDining': 'Lisää Ravintola / Kahvila',
    'admin.addDiningBtn': '+ Lisää Ravintola / Kahvila',
    'admin.noDining': 'Ei ravintoloita tai kahviloita',
    'admin.noDiningDesc': 'Lisää ravintoloita tai kahviloita tähän kauppakeskukseen.',
    'admin.addServiceEntry': 'Lisää Palvelu',
    'admin.addServiceBtn': '+ Lisää Palvelu',
    'admin.noServices': 'Ei palveluita',
    'admin.noServicesDesc': 'Lisää palveluita tähän kauppakeskukseen.',
    'admin.colStore': 'Liike',
    'admin.colFloor': 'Kerros',
    'admin.colCategory': 'Kategoria',

    'form.storeName': 'Liikkeen nimi *',
    'form.storeCategory': 'Kategoria',
    'form.storeFloor': 'Kerros / Sijainti',
    'form.storePhone': 'Puhelin',
    'form.storeHours': 'Aukioloajat',
    'form.storeWebsite': 'Verkkosivusto',
    'form.storeDesc': 'Kuvaus',
    'form.storeDescPlaceholder': 'Lyhyt kuvaus liikkeestä…',
    'form.storeAdded': 'Liike lisätty!',
    'form.storeUpdated': 'Liike päivitetty!',
    'form.storeDeleted': 'Liike poistettu',
    'form.storeNameRequired': 'Liikkeen nimi on pakollinen',
    'form.addStoreTitle': 'Lisää Liike',
    'form.editStoreTitle': 'Muokkaa Liikettä',
    'form.addDiningTitle': 'Lisää Ravintola / Kahvila',
    'form.editDiningTitle': 'Muokkaa Ravintolaa / Kahvilaa',
    'form.addServiceTitle': 'Lisää Palvelu',
    'form.editServiceTitle': 'Muokkaa Palvelua',
    'form.storeCenter': 'Kauppakeskus *',

    'type.mall': 'Kauppakeskus',
    'type.outlet': 'Outlet',
    'type.market': 'Tori',

    'login.tagline': 'Kauppakeskusten hallintajärjestelmä',
    'login.title': 'Kirjaudu hallintaportaaliin',
    'login.username': 'Käyttäjätunnus',
    'login.password': 'Salasana',
    'login.btn': 'Kirjaudu sisään',
    'login.cancel': 'Peruuta',
    'login.error': 'Virheellinen käyttäjätunnus tai salasana.',
    'login.demoTitle': 'Demo-tunnukset',
    'login.roleAdmin': 'Pääkäyttäjä',
    'login.roleManager': 'Hallinnoija',
    'login.roleUser': 'Normaali käyttäjä',
    'admin.roleUser': 'Käyttäjä',
    'login.loggedIn': 'Kirjautunut sisään',
    'login.welcomeBack': 'Tervetuloa takaisin',

    'access.denied': 'Pääsy estetty',
    'access.deniedDesc': 'Sinulla ei ole oikeutta muokata tätä sisältöä.',

    'profile.comingSoon': 'Profiilisivu tulossa',
    'settings.comingSoon': 'Asetukset tulossa'
    
  },

  en: {
    'nav.discover': 'Discover',
    'nav.feed': 'Events & Sales',
    'nav.admin': 'Manager Portal',
    'nav.signin': 'Sign In',
    'nav.addCenter': '+ Add Center',
    'nav.logout': 'Sign Out',

    'hero.eyebrow': 'Shopping Center Directory',
    'hero.title': 'Discover <em>Shopping Centers</em><br>Near You',
    'hero.sub': 'Browse malls, explore stores, and stay updated on exclusive events and deals.',
    'hero.searchPlaceholder': 'Search by name or city…',
    'hero.searchBtn': 'Search',
    'hero.statCenters': 'Centers',
    'hero.statPosts': 'Active Posts',
    'hero.statCities': 'Cities',

    'filter.all': 'All',
    'filter.favorites': 'Favorites',
    'filter.mall': 'Malls',
    'filter.outlet': 'Outlets',

    'discover.sectionLabel': 'Shopping Centers',

    'storecat.fashion':'Fashion',
    'storecat.foodDrink':'Restaurants & Cafés',
    'storecat.electronics':'Electronics',
    'storecat.sports':'Sports',
    'storecat.beauty':'Beauty',
    'storecat.home':'Home',
    'storecat.entertainment':'Entertainment',
    'storecat.services':'Services',
    'storecat.health':'Health',
    'storecat.other':'Other',

    'card.open': 'Open',
    'card.closed': 'Closed',
    'card.salesOn': 'Sales On',
    'card.events': 'Events',
    'card.favorite': 'Add to favorites',
    'card.favorited': 'Favorite',
    'card.favoriteAdded': 'Added to favorites',
    'card.favoriteRemoved': 'Removed from favorites',

    'detail.back': '← Back to Centers',
    'detail.about': 'About',
    'detail.centerDetails': 'Center Details',
    'detail.type': 'Type',
    'detail.hours': 'Opening Hours',
    'detail.stores': 'Total Stores',
    'detail.parking': 'Parking',
    'detail.phone': 'Phone',
    'detail.website': 'Website',
    'detail.floors': 'Floors & Areas',
    'detail.latestPosts': 'Latest Posts',
    'detail.noPosts': 'No posts yet.',
    'detail.openMaps': 'Open in Google Maps ↗',
    'detail.amenities': 'Amenities',
    'detail.openNow': 'Open Now',
    'detail.closedToday': 'Closed today',

    'feed.title': 'Events & Sales Feed',
    'feed.subtitle': 'Latest happenings across all shopping centers',
    'feed.filterSale': 'Sales',
    'feed.filterEvent': 'Events',
    'feed.filterNews': 'News',
    'feed.emptyTitle': 'Nothing here yet',
    'feed.emptyDesc': 'Shopping centers haven\'t published anything yet.',
    'feed.discount': 'Up to',
    'feed.discountOff': '% off',
    'feed.unknownCenter': 'Unknown Center',

    'admin.title': 'Manager Portal',
    'admin.subtitle': 'Manage your shopping centers and publish content',
    'admin.sidebarCenters': 'Centers',
    'admin.myCenters': 'My Centers',
    'admin.addCenter': 'Add Center',
    'admin.sidebarContent': 'Content',
    'admin.allPosts': 'All Posts',
    'admin.newPost': 'New Post',
    'admin.sidebarUsers': 'Users',
    'admin.manageUsers': 'Manage Users',
    'admin.centersTitle': 'All Centers',
    'admin.addCenterBtn': '+ Add Center',
    'admin.noCenters': 'No centers added yet',
    'admin.noCentersDesc': 'Add your first shopping center to get started.',
    'admin.colName': 'Name',
    'admin.colCity': 'City',
    'admin.colType': 'Type',
    'admin.colStatus': 'Status',
    'admin.colActions': 'Actions',
    'admin.edit': 'Edit',
    'admin.delete': 'Delete',

    'admin.postsTitle': 'All Posts',
    'admin.newPostBtn': '+ New Post',
    'admin.noPosts': 'No posts yet',
    'admin.noPostsDesc': 'Start posting events, sales, and news for your centers.',
    'admin.colTitle': 'Title',
    'admin.colCenter': 'Center',
    'admin.colPostType': 'Type',
    'admin.colDate': 'Date',

    'admin.usersTitle': 'User Management',
    'admin.usersSubtitle': 'Edit passwords or reassign managed centers.',
    'admin.colUser': 'User',
    'admin.colRole': 'Role',
    'admin.colManages': 'Manages',
    'admin.roleAdmin': 'Super Admin',
    'admin.roleManager': 'Manager',
    'admin.editUserTitle': 'Edit User',
    'admin.newPassword': 'New Password',
    'admin.newPasswordHint': 'Leave blank to keep current password.',
    'admin.assignCenter': 'Assigned Center',
    'admin.saveUser': 'Save',
    'admin.userSaved': 'User saved.',

    'form.addCenterTitle': 'Add New Shopping Center',
    'form.editCenterTitle': 'Edit Center',
    'form.addCenterSubtitle': 'Fill in the details for the new shopping center.',
    'form.editCenterSubtitle': 'Update center information and settings.',
    'form.name': 'Center Name *',
    'form.city': 'City *',
    'form.address': 'Street Address',
    'form.zip': 'Zip Code',
    'form.type': 'Center Type',
    'form.status': 'Status',
    'form.statusOpen': 'Open',
    'form.statusClosed': 'Closed',
    'form.phone': 'Phone Number',
    'form.website': 'Website',
    'form.hours': 'Opening Hours',
    'form.stores': 'Total Stores',
    'form.parking': 'Parking Info',
    'form.icon': 'Center Initial',
    'form.description': 'Description',
    'form.descPlaceholder': 'Brief description of the shopping center…',
    'form.floors': 'Floors / Areas',
    'form.floorsHint': 'Each item will be displayed as a separate floor/area card.',
    'form.floorsPlaceholder': 'Fashion & Accessories, Food Court, Electronics, Sports',
    'form.amenities': 'Amenities',
    'form.amenitiesPlaceholder': 'Free WiFi, Baby Room, ATM, Wheelchair Access',
    'form.cardColor': 'Card Background Color',
    'form.save': 'Save Changes',
    'form.addBtn': 'Add Center',
    'form.cancel': 'Cancel',
    'form.nameRequired': 'Center name is required',
    'form.cityRequired': 'City is required',
    'form.centerAdded': 'Center added successfully!',
    'form.centerUpdated': 'Center updated successfully!',
    'form.autoStatus': 'Automatic (Finland time)',
    'form.autoStatusHint': 'Status is calculated automatically based on opening hours.',
    'form.weeklyHours': 'Weekly opening hours',
    'form.closedDay': 'Closed',

    'form.postTitle': 'Create New Post',
    'form.postSubtitle': 'Publish a sale, event, or news announcement visible to all visitors.',
    'form.selectCenter': 'Shopping Center *',
    'form.selectCenterOption': '— Select a center —',
    'form.noCenters': 'No centers yet — add a center first.',
    'form.postType': 'Post Type',
    'form.postTypeSale': 'Sale',
    'form.postTypeEvent': 'Event',
    'form.postTypeNews': 'News / Announcement',
    'form.postTitleField': 'Title *',
    'form.postTitlePlaceholder': 'e.g. Summer Sale — Up to 50% off!',
    'form.postDesc': 'Description',
    'form.postDescPlaceholder': 'More details about this post…',
    'form.startDate': 'Start Date',
    'form.endDate': 'End Date',
    'form.discount': 'Discount %',
    'form.discountHint': '(sales only)',
    'form.publish': 'Publish Post',
    'form.postPublished': 'Post published successfully!',
    'form.centerRequired': 'Please select a center',
    'form.postTitleRequired': 'Post title is required',

    'modal.cancel': 'Cancel',
    'modal.delete': 'Delete',
    'modal.deleteCenterTitle': 'Delete Center',
    'modal.deleteCenterMsg': 'Are you sure you want to delete "{name}"? This will also remove all its posts.',
    'modal.deletePostTitle': 'Delete Post',
    'modal.deletePostMsg': 'Delete "{name}"?',
    'modal.centerDeleted': 'Center deleted',
    'modal.postDeleted': 'Post deleted',

    'stores.tab': 'Stores',
    'stores.tabDining': 'Restaurants & Cafés',
    'stores.tabServices': 'Services',
    'stores.sectionTitle': 'Store Directory',
    'stores.search': 'Search stores…',
    'stores.searchDining': 'Search restaurants or cafés…',
    'stores.searchServices': 'Search services…',
    'stores.filterAll': 'All categories',
    'stores.noStores': 'No stores yet.',
    'stores.noStoresDesc': 'Add the first store to this shopping center.',
    'stores.floor': 'Floor',
    'stores.phone': 'Phone',
    'stores.hours': 'Hours',
    'stores.weekdays': 'Mon–Fri',
    'stores.saturday': 'Sat',
    'stores.sunday': 'Sun',
    'stores.website': 'Website',
    'stores.count': 'stores',

    'admin.storesTitle': 'Stores',
    'admin.addStore': 'Add Store',
    'admin.addStoreBtn': '+ Add Store',
    'admin.noStores': 'No stores',
    'admin.noStoresDesc': 'Add stores to this shopping center.',
    'admin.addDining': 'Add Restaurant / Café',
    'admin.addDiningBtn': '+ Add Restaurant / Café',
    'admin.noDining': 'No restaurants or cafés',
    'admin.noDiningDesc': 'Add restaurants or cafés to this shopping center.',
    'admin.addServiceEntry': 'Add Service',
    'admin.addServiceBtn': '+ Add Service',
    'admin.noServices': 'No services',
    'admin.noServicesDesc': 'Add services to this shopping center.',
    'admin.colStore': 'Store',
    'admin.colFloor': 'Floor',
    'admin.colCategory': 'Category',

    'form.storeName': 'Store Name *',
    'form.storeCategory': 'Category',
    'form.storeFloor': 'Floor / Location',
    'form.storePhone': 'Phone',
    'form.storeHours': 'Opening Hours',
    'form.storeWebsite': 'Website',
    'form.storeDesc': 'Description',
    'form.storeDescPlaceholder': 'Brief description of the store…',
    'form.storeAdded': 'Store added!',
    'form.storeUpdated': 'Store updated!',
    'form.storeDeleted': 'Store deleted',
    'form.storeNameRequired': 'Store name is required',
    'form.addStoreTitle': 'Add Store',
    'form.editStoreTitle': 'Edit Store',
    'form.addDiningTitle': 'Add Restaurant / Café',
    'form.editDiningTitle': 'Edit Restaurant / Café',
    'form.addServiceTitle': 'Add Service',
    'form.editServiceTitle': 'Edit Service',
    'form.storeCenter': 'Shopping Center *',

    'type.mall': 'Mall',
    'type.outlet': 'Outlet',
    'type.market': 'Market',

    'login.tagline': 'Shopping center management platform',
    'login.title': 'Sign in to Manager Portal',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.btn': 'Sign In',
    'login.cancel': 'Cancel',
    'login.error': 'Incorrect username or password.',
    'login.demoTitle': 'Demo credentials',
    'login.roleAdmin': 'Super Admin',
    'login.roleManager': 'Manager',
    'login.roleUser': 'Normal User',
    'admin.roleUser': 'User',
    'login.loggedIn': 'Signed in',
    'login.welcomeBack': 'Welcome back',

    'access.denied': 'Access Denied',
    'access.deniedDesc': 'You do not have permission to edit this content.',

    'profile.comingSoon': 'Profile page coming soon',
    'settings.comingSoon': 'Settings coming soon'
  },

  sv: {
    'nav.discover': 'Utforska',
    'nav.feed': 'Evenemang & Rea',
    'nav.admin': 'Hanteringsportal',
    'nav.signin': 'Logga in',
    'nav.addCenter': '+ Lägg till Center',
    'nav.logout': 'Logga ut',

    'hero.eyebrow': 'Köpcenterkatalog',
    'hero.title': 'Utforska <em>Köpcentrum</em><br>Nära Dig',
    'hero.sub': 'Bläddra bland köpcentrum, utforska butiker och håll koll på exklusiva evenemang och erbjudanden.',
    'hero.searchPlaceholder': 'Sök på namn eller stad…',
    'hero.searchBtn': 'Sök',
    'hero.statCenters': 'Centrum',
    'hero.statPosts': 'Inlägg',
    'hero.statCities': 'Städer',

    'filter.all': 'Alla',
    'filter.favorites': 'Favoriter',
    'filter.mall': 'Köpcentrum',
    'filter.outlet': 'Outletcentrum',

    'discover.sectionLabel': 'Köpcentrum',

    'storecat.fashion':'Mode',
    'storecat.foodDrink':'Restauranger & kaféer',
    'storecat.electronics':'Elektronik',
    'storecat.sports':'Sport',
    'storecat.beauty':'Skönhet',
    'storecat.home':'Hem',
    'storecat.entertainment':'Underhållning',
    'storecat.services':'Tjänster',
    'storecat.health':'Hälsa',
    'storecat.other':'Övrigt',

    'card.open': 'Öppet',
    'card.closed': 'Stängt',
    'card.salesOn': 'Rea pågår',
    'card.events': 'Evenemang',
    'card.favorite': 'Lägg till favorit',
    'card.favorited': 'Favorit',
    'card.favoriteAdded': 'Tillagd i favoriter',
    'card.favoriteRemoved': 'Borttagen från favoriter',

    'detail.back': '← Tillbaka',
    'detail.about': 'Om',
    'detail.centerDetails': 'Centeruppgifter',
    'detail.type': 'Typ',
    'detail.hours': 'Öppettider',
    'detail.stores': 'Antal butiker',
    'detail.parking': 'Parkering',
    'detail.phone': 'Telefon',
    'detail.website': 'Webbplats',
    'detail.floors': 'Våningar & Områden',
    'detail.latestPosts': 'Senaste inlägg',
    'detail.noPosts': 'Inga inlägg ännu.',
    'detail.openMaps': 'Öppna i Google Maps ↗',
    'detail.amenities': 'Bekvämligheter',
    'detail.openNow': 'Öppet nu',
    'detail.closedToday': 'Stängt idag',

    'feed.title': 'Evenemang & Reafeed',
    'feed.subtitle': 'Senaste nytt från alla köpcentrum',
    'feed.filterSale': 'Rea',
    'feed.filterEvent': 'Evenemang',
    'feed.filterNews': 'Nyheter',
    'feed.emptyTitle': 'Inget här ännu',
    'feed.emptyDesc': 'Köpcentrumen har inte publicerat något ännu.',
    'feed.discount': 'Upp till',
    'feed.discountOff': '% rabatt',
    'feed.unknownCenter': 'Okänt centrum',

    'admin.title': 'Hanteringsportal',
    'admin.subtitle': 'Hantera dina köpcentrum och publicera innehåll',
    'admin.sidebarCenters': 'Centrum',
    'admin.myCenters': 'Mina Centrum',
    'admin.addCenter': 'Lägg till Centrum',
    'admin.sidebarContent': 'Innehåll',
    'admin.allPosts': 'Alla Inlägg',
    'admin.newPost': 'Nytt Inlägg',
    'admin.sidebarUsers': 'Användare',
    'admin.manageUsers': 'Hantera användare',
    'admin.centersTitle': 'Alla Centrum',
    'admin.addCenterBtn': '+ Lägg till Centrum',
    'admin.noCenters': 'Inga centrum tillagda ännu',
    'admin.noCentersDesc': 'Lägg till ditt första köpcentrum för att komma igång.',
    'admin.colName': 'Namn',
    'admin.colCity': 'Stad',
    'admin.colType': 'Typ',
    'admin.colStatus': 'Status',
    'admin.colActions': 'Åtgärder',
    'admin.edit': 'Redigera',
    'admin.delete': 'Ta bort',

    'admin.postsTitle': 'Alla Inlägg',
    'admin.newPostBtn': '+ Nytt Inlägg',
    'admin.noPosts': 'Inga inlägg ännu',
    'admin.noPostsDesc': 'Börja publicera evenemang, rea och nyheter.',
    'admin.colTitle': 'Titel',
    'admin.colCenter': 'Centrum',
    'admin.colPostType': 'Typ',
    'admin.colDate': 'Datum',

    'admin.usersTitle': 'Användarhantering',
    'admin.usersSubtitle': 'Redigera lösenord eller tilldela om hanterade centrum.',
    'admin.colUser': 'Användare',
    'admin.colRole': 'Roll',
    'admin.colManages': 'Hanterar',
    'admin.roleAdmin': 'Superadmin',
    'admin.roleManager': 'Hanterare',
    'admin.editUserTitle': 'Redigera användare',
    'admin.newPassword': 'Nytt lösenord',
    'admin.newPasswordHint': 'Lämna tomt för att behålla nuvarande lösenord.',
    'admin.assignCenter': 'Tilldelat centrum',
    'admin.saveUser': 'Spara',
    'admin.userSaved': 'Användare sparad.',

    'form.addCenterTitle': 'Lägg till Nytt Köpcentrum',
    'form.editCenterTitle': 'Redigera Centrum',
    'form.addCenterSubtitle': 'Fyll i uppgifterna för det nya köpcentrumet.',
    'form.editCenterSubtitle': 'Uppdatera centerinformation och inställningar.',
    'form.name': 'Centernamn *',
    'form.city': 'Stad *',
    'form.address': 'Gatuadress',
    'form.zip': 'Postnummer',
    'form.type': 'Centertyp',
    'form.status': 'Status',
    'form.statusOpen': 'Öppet',
    'form.statusClosed': 'Stängt',
    'form.phone': 'Telefonnummer',
    'form.website': 'Webbplats',
    'form.hours': 'Öppettider',
    'form.stores': 'Antal butiker',
    'form.parking': 'Parkeringsinformation',
    'form.icon': 'Centertecken',
    'form.description': 'Beskrivning',
    'form.descPlaceholder': 'Kort beskrivning av köpcentrumet…',
    'form.floors': 'Våningar / Områden',
    'form.floorsHint': 'Varje post visas som ett separat vånings-/områdeskort.',
    'form.floorsPlaceholder': 'Mode & Accessoarer, Matgalleria, Elektronik, Sport',
    'form.amenities': 'Bekvämligheter',
    'form.amenitiesPlaceholder': 'Gratis WiFi, Barnrum, ATM, Handikappanpassat',
    'form.cardColor': 'Kortets bakgrundsfärg',
    'form.save': 'Spara ändringar',
    'form.addBtn': 'Lägg till Centrum',
    'form.cancel': 'Avbryt',
    'form.nameRequired': 'Centernamn är obligatoriskt',
    'form.cityRequired': 'Stad är obligatorisk',
    'form.centerAdded': 'Centrum tillagt!',
    'form.centerUpdated': 'Centrum uppdaterat!',
    'form.autoStatus': 'Automatisk (Finländsk tid)',
    'form.autoStatusHint': 'Status räknas automatiskt utifrån öppettiderna.',
    'form.weeklyHours': 'Veckans öppettider',
    'form.closedDay': 'Stängt',

    'form.postTitle': 'Skapa Nytt Inlägg',
    'form.postSubtitle': 'Publicera en rea, ett evenemang eller ett nyhetsmeddelande.',
    'form.selectCenter': 'Köpcentrum *',
    'form.selectCenterOption': '— Välj ett centrum —',
    'form.noCenters': 'Inga centrum ännu — lägg till ett centrum först.',
    'form.postType': 'Inläggstyp',
    'form.postTypeSale': 'Rea',
    'form.postTypeEvent': 'Evenemang',
    'form.postTypeNews': 'Nyhet / Meddelande',
    'form.postTitleField': 'Titel *',
    'form.postTitlePlaceholder': 't.ex. Sommarrea — upp till 50% rabatt!',
    'form.postDesc': 'Beskrivning',
    'form.postDescPlaceholder': 'Mer information om detta inlägg…',
    'form.startDate': 'Startdatum',
    'form.endDate': 'Slutdatum',
    'form.discount': 'Rabatt %',
    'form.discountHint': '(endast för rea)',
    'form.publish': 'Publicera',
    'form.postPublished': 'Inlägg publicerat!',
    'form.centerRequired': 'Välj ett centrum',
    'form.postTitleRequired': 'Inläggstitel är obligatorisk',

    'modal.cancel': 'Avbryt',
    'modal.delete': 'Ta bort',
    'modal.deleteCenterTitle': 'Ta bort Centrum',
    'modal.deleteCenterMsg': 'Är du säker på att du vill ta bort "{name}"? Alla dess inlägg tas också bort.',
    'modal.deletePostTitle': 'Ta bort Inlägg',
    'modal.deletePostMsg': 'Ta bort "{name}"?',
    'modal.centerDeleted': 'Centrum borttaget',
    'modal.postDeleted': 'Inlägg borttaget',

    'stores.tab': 'Butiker',
    'stores.tabDining': 'Restauranger & kaféer',
    'stores.tabServices': 'Tjänster',
    'stores.sectionTitle': 'Butikskatalog',
    'stores.search': 'Sök butiker…',
    'stores.searchDining': 'Sök restauranger eller kaféer…',
    'stores.searchServices': 'Sök tjänster…',
    'stores.filterAll': 'Alla kategorier',
    'stores.noStores': 'Inga butiker ännu.',
    'stores.noStoresDesc': 'Lägg till den första butiken i detta köpcentrum.',
    'stores.floor': 'Våning',
    'stores.phone': 'Telefon',
    'stores.hours': 'Öppettider',
    'stores.weekdays': 'Mån–Fre',
    'stores.saturday': 'Lör',
    'stores.sunday': 'Sön',
    'stores.website': 'Webbplats',
    'stores.count': 'butiker',

    'admin.storesTitle': 'Butiker',
    'admin.addStore': 'Lägg till Butik',
    'admin.addStoreBtn': '+ Lägg till Butik',
    'admin.noStores': 'Inga butiker',
    'admin.noStoresDesc': 'Lägg till butiker i detta köpcentrum.',
    'admin.addDining': 'Lägg till restaurang / kafé',
    'admin.addDiningBtn': '+ Lägg till restaurang / kafé',
    'admin.noDining': 'Inga restauranger eller kaféer',
    'admin.noDiningDesc': 'Lägg till restauranger eller kaféer i detta köpcentrum.',
    'admin.addServiceEntry': 'Lägg till tjänst',
    'admin.addServiceBtn': '+ Lägg till tjänst',
    'admin.noServices': 'Inga tjänster',
    'admin.noServicesDesc': 'Lägg till tjänster i detta köpcentrum.',
    'admin.colStore': 'Butik',
    'admin.colFloor': 'Våning',
    'admin.colCategory': 'Kategori',

    'form.storeName': 'Butiksnamn *',
    'form.storeCategory': 'Kategori',
    'form.storeFloor': 'Våning / Plats',
    'form.storePhone': 'Telefon',
    'form.storeHours': 'Öppettider',
    'form.storeWebsite': 'Webbplats',
    'form.storeDesc': 'Beskrivning',
    'form.storeDescPlaceholder': 'Kort beskrivning av butiken…',
    'form.storeAdded': 'Butik tillagd!',
    'form.storeUpdated': 'Butik uppdaterad!',
    'form.storeDeleted': 'Butik borttagen',
    'form.storeNameRequired': 'Butiksnamn är obligatoriskt',
    'form.addStoreTitle': 'Lägg till Butik',
    'form.editStoreTitle': 'Redigera Butik',
    'form.storeCenter': 'Köpcentrum *',

    'type.mall': 'Köpcentrum',
    'type.outlet': 'Outlet',
    'type.market': 'Marknad',

    'login.tagline': 'Hanteringssystem för köpcentrum',
    'login.title': 'Logga in på hanteringsportalen',
    'login.username': 'Användarnamn',
    'login.password': 'Lösenord',
    'login.btn': 'Logga in',
    'login.cancel': 'Avbryt',
    'login.error': 'Felaktigt användarnamn eller lösenord.',
    'login.demoTitle': 'Demoinloggningar',
    'login.roleAdmin': 'Superadmin',
    'login.roleManager': 'Hanterare',
    'login.roleUser': 'Vanlig användare',
    'admin.roleUser': 'Användare',
    'login.loggedIn': 'Inloggad',
    'login.welcomeBack': 'Välkommen tillbaka',

    'access.denied': 'Åtkomst nekad',
    'access.deniedDesc': 'Du har inte behörighet att redigera detta innehåll.',

    'profile.comingSoon': 'Profilsidan kommer snart',
    'settings.comingSoon': 'Inställningar kommer snart'
  }
};

const TRANSLATIONS = {
  fi: { ...(DEFAULT_TRANSLATIONS.fi || {}), ...((window.TRANSLATIONS && window.TRANSLATIONS.fi) || {}) },
  en: { ...(DEFAULT_TRANSLATIONS.en || {}), ...((window.TRANSLATIONS && window.TRANSLATIONS.en) || {}) },
  sv: { ...(DEFAULT_TRANSLATIONS.sv || {}), ...((window.TRANSLATIONS && window.TRANSLATIONS.sv) || {}) }
};

/* =====================
   LANGUAGE ENGINE
   ===================== */
let currentLang = localStorage.getItem('plazify_lang') || 'fi';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS.en[key]) ||
         key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('plazify_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('lang-' + lang);
  if (btn) btn.classList.add('active');

  applyTranslations();

  const active = document.querySelector('.view.active');
  if (active) {
    const id = active.id.replace('view-', '');
    if (id === 'discover') renderCenters();
    if (id === 'feed') renderFeed();
    if (id === 'admin') {
      const sb = document.querySelector('.sidebar-item.active');
      if (sb) switchAdmin(sb.id.replace('sb-', ''));
    }
    if (id === 'detail' && window.currentDetailCenterId) showDetail(window.currentDetailCenterId);
  }

  renderNavAuth();
  renderLoginHints();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

/* =====================
   AUTH SYSTEM
   ===================== */
function seedUsers() {
  if (localStorage.getItem('plazify_users')) return;

  const users = [
    { id: 'u_admin', username: 'admin', password: 'admin123', role: 'admin', centerId: null, displayName: 'Super Admin' },
    { id: 'u_mgr1', username: 'manager1', password: 'mall123', role: 'manager', centerId: null, displayName: 'Mall Manager 1' },
    { id: 'u_mgr2', username: 'manager2', password: 'shop456', role: 'manager', centerId: null, displayName: 'Mall Manager 2' },
    { id: 'u_user1', username: 'user1', password: 'user123', role: 'user', centerId: null, displayName: 'Normal User' }
  ];

  localStorage.setItem('plazify_users', JSON.stringify(users));
}

function getUsers() {
  return appData.users || [];
}

function saveUsers(data) {
  // No longer saves to localStorage, data comes from API
}

let currentUser = null;
let selectedFloor = 'all';

function loadSession() {
  try {
    currentUser = JSON.parse(sessionStorage.getItem('plazify_session') || 'null');
  } catch {
    currentUser = null;
  }
}

function saveSession() {
  if (currentUser) sessionStorage.setItem('plazify_session', JSON.stringify(currentUser));
  else sessionStorage.removeItem('plazify_session');
}

async function doLogin() {
  const uname = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-error');

  try {
    const data = await api('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: uname,
        password: pass
      })
    });

    currentUser = data.user;
    await loadAllData();

    errEl.classList.remove('show');
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app').style.display = '';
    renderNavAuth();
    renderSidebarUser();

    const defaultView = currentUser.role === 'user'
      ? 'discover'
      : getAppSettings().defaultView || 'admin';
    showView(['discover', 'feed', 'admin'].includes(defaultView) ? defaultView : 'admin');
    showToast(t('login.welcomeBack') + ', ' + currentUser.displayName + '!', 'success');
  } catch (err) {
    errEl.classList.add('show');
    document.getElementById('login-pass').value = '';
    console.error(err);
    showToast(err.message || 'Kirjautuminen epäonnistui', 'error');
  }
}
function renderFloorFilters(centerId) {
  const center = DB.getCenters().find(c => c.id === centerId);
  const stores = DB.getStores().filter(s => s.centerId === centerId);
  const configuredFloors = (center?.floors || '')
    .split(',')
    .map(f => f.trim())
    .filter(Boolean);
  const storeFloors = stores.map(s => (s.floor || '').trim()).filter(Boolean);
  const floors = [...new Set([...configuredFloors, ...storeFloors])];

  if (!floors.length) {
    return `<div style="color:var(--muted);font-size:0.85rem">Ei kerrostietoja lisätty.</div>`;
  }

  return `
    <div class="floor-grid" id="floor-filters-${centerId}">
      <button type="button" class="floor-item active" onclick="showFloorStores('${centerId}','all', this)">
        Kaikki
      </button>
      ${floors.map(floor => `
        <button type="button" class="floor-item" onclick="showFloorStores('${centerId}','${escAttr(floor)}', this)">
          ${escHtml(floor)}
        </button>
      `).join('')}
    </div>
    <div id="floor-stores-output" style="margin-top:1rem;"></div>
  `;
}

function showFloorStores(centerId, floorName, btnEl) {
  const stores = DB.getStores().filter(s => s.centerId === centerId);
  const normalizedTarget = (floorName || '').trim().toLowerCase();
  const floorStores = !normalizedTarget || normalizedTarget === 'all'
    ? stores
    : stores.filter(s => (s.floor || '').trim().toLowerCase() === normalizedTarget);

  selectedFloor = normalizedTarget === 'all' ? 'all' : floorName;

  const buttons = document.querySelectorAll(`#floor-filters-${centerId} .floor-item`);
  buttons.forEach(btn => btn.classList.remove('active'));

  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    const activeBtn = Array.from(buttons).find(btn => btn.textContent.trim().toLowerCase() === normalizedTarget)
      || Array.from(buttons).find(btn => btn.textContent.trim().toLowerCase() === 'kaikki');
    if (activeBtn) activeBtn.classList.add('active');
  }

  const output = document.getElementById('floor-stores-output');
  if (!output) return;

  if (!floorStores.length) {
    output.innerHTML = `
      <div style="padding:0.75rem 0;color:var(--muted);font-size:0.85rem">
        Tälle kerrokselle ei ole lisätty liikkeitä.
      </div>
    `;
    return;
  }

  output.innerHTML = `
    <div style="margin-bottom:0.75rem;font-weight:600;color:var(--charcoal)">
      ${escHtml(floorName)}
    </div>
    <div class="store-grid">
      ${floorStores.map(s => storeCardHtml(s)).join('')}
    </div>
  `;
}

function setFloorFilter(centerId, floor, btnEl) {
  showFloorStores(centerId, floor, btnEl);
}


async function doLogout() {
  try {
    await api('/logout', { method: 'POST' });
  } catch (err) {
    console.error('Logout error:', err);
  }

  currentUser = null;
  appData.users = [];
  renderNavAuth();
  showView('discover');
  showToast(t('nav.logout'), 'info');
}

function requireLogin() {
  if (currentUser) {
    if (currentUser.role === 'user') {
      showView('discover');
      showToast(t('access.denied'), 'error');
      return;
    }
    showView('admin');
    return;
  }

  document.getElementById('login-screen').style.display = '';
  document.getElementById('app').style.display = 'none';
  renderLoginHints();
  applyTranslations();

  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  document.getElementById('login-error').classList.remove('show');
}

function cancelLogin() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').style.display = '';
  showView('discover');
}

function renderNavAuth() {
  const el = document.getElementById('nav-auth');
  if (!el) return;

  if (currentUser) {
    const initials = currentUser.displayName
      .split(' ')
      .map(w => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    el.innerHTML = `
      <div class="user-menu-wrap">
        <div class="user-chip" onclick="toggleUserMenu(event)">
          <div class="user-avatar">${initials}</div>
          <div>
            <span class="user-name">${escHtml(currentUser.displayName)}</span>
            <span class="user-role">${getRoleLabel(currentUser.role)}</span>
          </div>
        </div>

        <div class="user-dropdown" id="user-dropdown">
          <div class="user-dropdown-head">
            <div class="user-dropdown-name">${escHtml(currentUser.displayName)}</div>
            <div class="user-dropdown-role">${getRoleLabel(currentUser.role)}</div>
          </div>

          <button class="user-dropdown-item" onclick="openProfile()">
            Oma profiili
          </button>

          <button class="user-dropdown-item" onclick="openSettings()">
            Asetukset
          </button>

          <button class="user-dropdown-item danger" onclick="doLogout()">
            ${t('nav.logout')}
          </button>
        </div>
      </div>
    `;
  } else {
    el.innerHTML = `
      <button class="btn-ghost" onclick="requireLogin()">${t('nav.signin')}</button>
    `;
  }

  const adminTab = document.getElementById('tab-admin');
  if (adminTab) {
    adminTab.style.display = currentUser && currentUser.role !== 'user' ? '' : 'none';
  }

  const mobileAdminTab = document.getElementById('mobile-tab-admin');
  if (mobileAdminTab) {
    mobileAdminTab.style.display = currentUser && currentUser.role !== 'user' ? '' : 'none';
  }

  updateFavoriteFilterVisibility();
}

function toggleUserMenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('user-dropdown');
  if (menu) menu.classList.toggle('show');
}

function openProfile() {
  const menu = document.getElementById('user-dropdown');
  if (menu) menu.classList.remove('show');

  showView('admin');
  switchAdmin('settings');
}

function openSettings() {
  const menu = document.getElementById('user-dropdown');
  if (menu) menu.classList.remove('show');

  showView('admin');
  switchAdmin('settings');
}

function renderSidebarUser() {
  const el = document.getElementById('sidebar-user-card');
  if (!currentUser || !el) return;

  const centers = DB.getCenters();
  const assignedCenter = currentUser.centerId ? centers.find(c => c.id === currentUser.centerId) : null;

  el.innerHTML = `
    <div class="sidebar-user">
      <div class="sidebar-user-name">${escHtml(currentUser.displayName)}</div>
      <div class="sidebar-user-role">${getRoleLabel(currentUser.role)}</div>
      ${assignedCenter ? `<div class="sidebar-user-center">${escHtml(assignedCenter.name)}</div>` : ''}
      <button class="sidebar-logout" onclick="doLogout()">${t('nav.logout')}</button>
    </div>
  `;

  const usersWrap = document.getElementById('sb-manage-users-wrap');
  if (usersWrap) usersWrap.style.display = currentUser.role === 'admin' ? '' : 'none';
}

function renderLoginHints() {
  const el = document.getElementById('login-hint-rows');
  if (!el) return;

  const users = [
    { username: 'admin', password: 'admin123', role: 'admin', centerId: null },
    { username: 'manager1', password: 'mall123', role: 'manager', centerId: null },
    { username: 'manager2', password: 'shop456', role: 'manager', centerId: null },
    { username: 'user1', password: 'user123', role: 'user', centerId: null }
  ];
  const centers = DB.getCenters();

  el.innerHTML = users.map(u => {
    const center = u.centerId ? centers.find(c => c.id === u.centerId) : null;
    const roleLabel = u.role === 'admin'
      ? t('login.roleAdmin')
      : u.role === 'manager'
        ? t('login.roleManager')
        : t('login.roleUser');

    return `
      <div class="credential-row">
        <div>
          <div class="cred-val">${escHtml(u.username)} / ${escHtml(u.password)}</div>
          ${center ? `<div style="font-size:0.72rem;color:var(--muted)">${escHtml(center.name)}</div>` : ''}
        </div>
        <div class="cred-vals"><span class="cred-role">${roleLabel}</span></div>
      </div>
    `;
  }).join('');
}

/* =====================
   OPENING HOURS / FINLAND TIME
   ===================== */
function getFinlandDateParts() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Helsinki',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  });

  const parts = formatter.formatToParts(now);
  const weekdayRaw = parts.find(p => p.type === 'weekday')?.value?.toLowerCase() || 'mon';
  const hour = parts.find(p => p.type === 'hour')?.value || '00';
  const minute = parts.find(p => p.type === 'minute')?.value || '00';

  const weekdayMap = {
    mon: 'mon',
    tue: 'tue',
    wed: 'wed',
    thu: 'thu',
    fri: 'fri',
    sat: 'sat',
    sun: 'sun'
  };

  return {
    dayKey: weekdayMap[weekdayRaw] || 'mon',
    time: `${hour}:${minute}`
  };
}

function timeToMinutes(timeStr) {
  if (!timeStr || !timeStr.includes(':')) return null;
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function isCenterOpenNow(center) {
  if (!center.openingHours) {
    return !!center.open;
  }

  const { dayKey, time } = getFinlandDateParts();
  const today = center.openingHours[dayKey];

  if (!today || today.closed) return false;

  const openMinutes = timeToMinutes(today.open);
  const closeMinutes = timeToMinutes(today.close);
  const nowMinutes = timeToMinutes(time);

  if (openMinutes === null || closeMinutes === null || nowMinutes === null) return false;

  return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
}

function getTodayHoursText(center) {
  if (!center.openingHours) return center.hours || '—';

  const { dayKey } = getFinlandDateParts();
  const today = center.openingHours[dayKey];

  if (!today || today.closed) return t('detail.closedToday');
  if (!today.open || !today.close) return '—';

  return `${today.open}–${today.close}`;
}

function getCenterOpeningHoursHtml(center) {
  if (!center.openingHours) return escHtml(center.hours || '—');

  const labelsByLang = {
    fi: { weekdays: t('stores.weekdays'), mon: 'Ma', tue: 'Ti', wed: 'Ke', thu: 'To', fri: 'Pe', sat: 'La', sun: 'Su' },
    en: { weekdays: t('stores.weekdays'), mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun' },
    sv: { weekdays: t('stores.weekdays'), mon: 'Mån', tue: 'Tis', wed: 'Ons', thu: 'Tor', fri: 'Fre', sat: 'Lör', sun: 'Sön' }
  };

  const labels = labelsByLang[currentLang] || labelsByLang.en;
  const formatHours = (entry) => {
    if (!entry || entry.closed) return t('card.closed');
    if (!entry.open || !entry.close) return '—';
    return `${entry.open}–${entry.close}`;
  };

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const sameWeekdays = weekdays.every(day => {
    const current = center.openingHours[day] || {};
    const first = center.openingHours.mon || {};
    return !!current.closed === !!first.closed && (current.open || '') === (first.open || '') && (current.close || '') === (first.close || '');
  });

  const rows = sameWeekdays
    ? [
        { label: labels.weekdays, value: formatHours(center.openingHours.mon) },
        { label: labels.sat, value: formatHours(center.openingHours.sat) },
        { label: labels.sun, value: formatHours(center.openingHours.sun) }
      ]
    : ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(day => ({
        label: labels[day],
        value: formatHours(center.openingHours[day])
      }));

  return `
    <span class="detail-hours-list">
      ${rows.map(row => `
        <span class="detail-hours-row">
          <span class="detail-hours-day">${escHtml(row.label)}</span>
          <span>${escHtml(row.value)}</span>
        </span>
      `).join('')}
    </span>
  `;
}

function getOpeningHoursFromForm() {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const openingHours = {};

  days.forEach(day => {
    const openEl = document.getElementById(`oh-${day}-open`);
    const closeEl = document.getElementById(`oh-${day}-close`);
    const closedEl = document.getElementById(`oh-${day}-closed`);

    openingHours[day] = {
      open: openEl ? openEl.value : '',
      close: closeEl ? closeEl.value : '',
      closed: closedEl ? closedEl.checked : false
    };
  });

  return openingHours;
}

function getOpeningHoursFormHtml(existingHours = {}) {
  const labels = {
    mon: 'Maanantai',
    tue: 'Tiistai',
    wed: 'Keskiviikko',
    thu: 'Torstai',
    fri: 'Perjantai',
    sat: 'Lauantai',
    sun: 'Sunnuntai'
  };

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return `
    <div class="form-group">
      <label class="form-label">${t('form.weeklyHours')}</label>
      <div class="hours-admin-grid">
        ${days.map(day => {
          const item = existingHours[day] || { open: '', close: '', closed: false };
          return `
            <div class="hours-admin-row">
              <div class="hours-admin-day">${labels[day]}</div>
              <input class="form-input" type="time" id="oh-${day}-open" value="${escAttr(item.open || '')}">
              <input class="form-input" type="time" id="oh-${day}-close" value="${escAttr(item.close || '')}">
              <label class="hours-admin-closed">
                <input type="checkbox" id="oh-${day}-closed" ${item.closed ? 'checked' : ''}>
                ${t('form.closedDay')}
              </label>
            </div>
          `;
        }).join('')}
      </div>
      <div class="form-hint">${t('form.autoStatusHint')}</div>
    </div>
  `;
}

/* =====================
   API & DATA LAYER
   ===================== */
const API_HOST = ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ? window.location.hostname
  : '127.0.0.1';
const API_URL = `http://${API_HOST}:3001/api`;

async function api(path, options = {}) {
  const res = await fetch(API_URL + path, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  const text = await res.text();
  let data = null;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }
  }

  if (!res.ok) {
    const msg = data?.error || data?.message || text || 'API error';
    throw new Error(msg);
  }

  if (res.status === 204) return null;
  return data;
}

let appData = {
  centers: [],
  posts: [],
  stores: [],
  users: []
};

async function loadPublicData() {
  const [centers, posts, stores] = await Promise.all([
    api('/centers'),
    api('/posts'),
    api('/stores')
  ]);

  // Parse hours JSON and map icon to bannerImage
  appData.centers = (centers || []).map(c => ({
    ...c,
    openingHours: c.hours ? (() => {
      try {
        return JSON.parse(c.hours);
      } catch {
        return {};
      }
    })() : {},
    bannerImage: c.icon || ''
  }));
  appData.posts = posts || [];
  appData.stores = stores || [];
}

async function loadUsersIfAdmin() {
  if (currentUser && currentUser.role === 'admin') {
    appData.users = await api('/users');
  }
}

function getRoleLabel(role) {
  if (role === 'admin') return t('admin.roleAdmin');
  if (role === 'manager') return t('admin.roleManager');
  return t('admin.roleUser');
}

async function loadAllData() {
  await loadPublicData();
  await loadUsersIfAdmin();
}

const DB = {
  getCenters() {
    return appData.centers || [];
  },
  getPosts() {
    return appData.posts || [];
  },
  getStores() {
    return appData.stores || [];
  }
};

/* =====================
   NAVIGATION
   ===================== */
let activeFilter = 'all';
let activeFeedFilter = 'all';
window.currentDetailCenterId = null;

function showView(v) {
  if (v === 'admin' && !currentUser) {
    requireLogin();
    return;
  }

  if (v === 'admin' && currentUser?.role === 'user') {
    showView('discover');
    showToast(t('access.denied'), 'error');
    return;
  }

  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  const view = document.getElementById('view-' + v);
  if (view) view.classList.add('active');

  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
  const tabMap = { discover: 'tab-discover', feed: 'tab-feed', admin: 'tab-admin' };
  if (tabMap[v]) {
    const tabEl = document.getElementById(tabMap[v]);
    if (tabEl) tabEl.classList.add('active');
  }

  if (v === 'discover') renderCenters();
  if (v === 'feed') renderFeed();
  if (v === 'admin') {
    renderSidebarUser();
    switchAdmin('centers');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-nav');
  if (!m) return;
  m.style.display = m.style.display === 'none' ? 'block' : 'none';
}

function switchAdmin(section) {
  if (!currentUser) return;

  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  const sb = document.getElementById('sb-' + section);
  if (sb) sb.classList.add('active');

  if (section === 'centers') renderAdminCenters();
  else if (section === 'add-center') renderAddCenterForm(null);
  else if (section === 'posts') renderAdminPosts();
  else if (section === 'add-post') renderAddPostForm();
  else if (section === 'users') renderAdminUsers();
  else if (section === 'stores') renderAdminStores('store');
  else if (section === 'add-store') renderAddStoreForm(null, 'store');
  else if (section === 'dining') renderAdminStores('dining');
  else if (section === 'add-dining') renderAddStoreForm(null, 'dining');
  else if (section === 'services') renderAdminStores('service');
  else if (section === 'add-service') renderAddStoreForm(null, 'service');
  else if (section === 'settings') renderSettingsPage();
}

function getAppSettings() {
  const defaults = {
    language: currentLang,
    defaultView: 'admin',
    notifications: 'on',
    theme: 'light'
  };

  try {
    return {
      ...defaults,
      ...JSON.parse(localStorage.getItem('plazify_settings') || '{}')
    };
  } catch {
    return defaults;
  }
}

function applyAppSettings() {
  const settings = getAppSettings();
  document.body.classList.toggle('theme-dark', settings.theme === 'dark');
}

function renderSettingsPage() {
  if (!currentUser) return;

  const settings = getAppSettings();

  document.getElementById('admin-content').innerHTML = `
    <div class="form-panel">
      <h3>${t('settings.title')}</h3>
      <p class="form-subtitle">${t('settings.subtitle')}</p>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('settings.language')}</label>
          <select class="form-select" id="settings-language">
            <option value="fi" ${settings.language === 'fi' ? 'selected' : ''}>Suomi</option>
            <option value="en" ${settings.language === 'en' ? 'selected' : ''}>English</option>
            <option value="sv" ${settings.language === 'sv' ? 'selected' : ''}>Svenska</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">${t('settings.defaultView')}</label>
          <select class="form-select" id="settings-default-view">
            <option value="discover" ${settings.defaultView === 'discover' ? 'selected' : ''}>${t('settings.optionDiscover')}</option>
            <option value="admin" ${settings.defaultView === 'admin' ? 'selected' : ''}>${t('settings.optionAdmin')}</option>
            <option value="feed" ${settings.defaultView === 'feed' ? 'selected' : ''}>${t('settings.optionFeed')}</option>
          </select>
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('settings.notifications')}</label>
          <select class="form-select" id="settings-notifications">
            <option value="on" ${settings.notifications === 'on' ? 'selected' : ''}>${t('settings.optionOn')}</option>
            <option value="off" ${settings.notifications === 'off' ? 'selected' : ''}>${t('settings.optionOff')}</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">${t('settings.theme')}</label>
          <select class="form-select" id="settings-theme">
            <option value="light" ${settings.theme === 'light' ? 'selected' : ''}>${t('settings.optionLight')}</option>
            <option value="dark" ${settings.theme === 'dark' ? 'selected' : ''}>${t('settings.optionDark')}</option>
          </select>
        </div>
      </div>

      <div class="form-actions">
        <button class="btn-primary" onclick="saveSettings()">${t('settings.save')}</button>
      </div>
    </div>
  `;
}

function saveSettings() {
  const settings = {
    language: val('settings-language') || currentLang,
    defaultView: val('settings-default-view') || 'admin',
    notifications: val('settings-notifications') || 'on',
    theme: val('settings-theme') || 'light'
  };

  localStorage.setItem('plazify_settings', JSON.stringify(settings));
  localStorage.setItem('plazify_lang', settings.language);

  applyAppSettings();
  setLang(settings.language);
  showToast(t('settings.saved'), 'success');
}

/* =====================
   TOAST & MODAL
   ===================== */
function showToast(msg, type = 'info') {
  const el = document.getElementById('toast');
  if (!el) return;

  el.textContent = msg;
  el.className = `toast ${type} show`;

  clearTimeout(el._t);
  el._t = setTimeout(() => {
    el.className = 'toast';
  }, 3000);
}

function openModal(title, msg, onConfirm) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-msg').textContent = msg;

  const btn = document.getElementById('modal-confirm-btn');
  btn.textContent = t('modal.delete');
  btn.style.background = 'var(--red)';
  btn.onclick = () => {
    closeModal();
    if (onConfirm) onConfirm();
  };

  document.getElementById('modal-cancel-btn').textContent = t('modal.cancel');
  document.getElementById('confirm-modal').classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('confirm-modal');
  if (modal) modal.classList.remove('show');
}

function getFavoriteStorageKey() {
  return currentUser ? `plazify_favorite_centers_${currentUser.id}` : null;
}

function getFavoriteCenters() {
  const key = getFavoriteStorageKey();
  if (!key) return [];

  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
}

function saveFavoriteCenters(ids) {
  const key = getFavoriteStorageKey();
  if (!key) return;

  localStorage.setItem(key, JSON.stringify([...new Set(ids)]));
}

function isFavoriteCenter(id) {
  return getFavoriteCenters().includes(id);
}

function toggleFavoriteCenter(event, id) {
  event.stopPropagation();

  if (!currentUser) {
    requireLogin();
    return;
  }

  const favorites = getFavoriteCenters();
  const exists = favorites.includes(id);
  const next = exists
    ? favorites.filter(favId => favId !== id)
    : [...favorites, id];

  saveFavoriteCenters(next);
  renderCenters();
  showToast(exists ? t('card.favoriteRemoved') : t('card.favoriteAdded'), 'success');
}

function updateFavoriteFilterVisibility() {
  const btn = document.getElementById('filter-favorites');
  if (!btn) return;

  btn.style.display = currentUser ? '' : 'none';
  if (!currentUser && activeFilter === 'favorites') {
    activeFilter = 'all';
    document.querySelectorAll('#type-filters .pill').forEach(x => x.classList.remove('active'));
    document.querySelector('#type-filters .pill')?.classList.add('active');
  }
}

/* =====================
   DISCOVER
   ===================== */
function setFilter(f, el) {
  if (f === 'favorites' && !currentUser) {
    requireLogin();
    return;
  }

  activeFilter = f;
  document.querySelectorAll('#type-filters .pill').forEach(x => x.classList.remove('active'));
  if (el) el.classList.add('active');
  renderCenters();
}

function renderCenters() {
  updateFavoriteFilterVisibility();

  const q = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
  const centers = DB.getCenters();
  const posts = DB.getPosts();
  const cities = [...new Set(centers.map(c => c.city))].filter(Boolean);

  document.getElementById('stat-centers').textContent = centers.length;
  document.getElementById('stat-posts').textContent = posts.length;
  document.getElementById('stat-cities').textContent = cities.length;

  const filtered = centers.filter(c => {
    const mq = !q ||
      c.name.toLowerCase().includes(q) ||
      (c.city || '').toLowerCase().includes(q) ||
      (c.address || '').toLowerCase().includes(q);

    const mt = activeFilter === 'all'
      || (activeFilter === 'favorites' && currentUser && isFavoriteCenter(c.id))
      || c.type === activeFilter;
    return mq && mt;
  });

  const grid = document.getElementById('centers-grid');
  if (!grid) return;

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty" style="grid-column:1/-1">
        <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:var(--border2);margin-bottom:0.85rem">+</div>
        <h3>${t('admin.noCenters')}</h3>
        <p>${t('admin.noCentersDesc')}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(c => {
    const hasSale = posts.some(p => p.centerId === c.id && p.type === 'sale');
    const hasEvent = posts.some(p => p.centerId === c.id && p.type === 'event');
    const openNow = isCenterOpenNow(c);
    const todayHours = getTodayHoursText(c);
    const favorited = currentUser && isFavoriteCenter(c.id);

    return `
      <article class="center-card" onclick="showDetail('${c.id}')">
        <div class="card-banner" style="background:${c.color || '#E8F0E8'};${c.bannerImage ? `background-image:url('${c.bannerImage}');background-size:${c.zoomBanner || 100}%;background-position:${c.posBannerX || 50}% ${c.posBannerY || 50}%;background-repeat:no-repeat;` : ''}">
          ${currentUser ? `
            <button
              type="button"
              class="favorite-btn ${favorited ? 'active' : ''}"
              onclick="toggleFavoriteCenter(event, '${escAttr(c.id)}')"
              title="${escAttr(favorited ? t('card.favorited') : t('card.favorite'))}"
              aria-label="${escAttr(favorited ? t('card.favorited') : t('card.favorite'))}"
            >${favorited ? '★' : '☆'}</button>
          ` : ''}
          <div class="card-type-badge">${escHtml(t('type.' + c.type) || c.type || '')}</div>
          <div class="card-open-badge">
            <span class="status-dot ${openNow ? 'open' : 'closed'}"></span>
            ${openNow ? t('card.open') : t('card.closed')}
          </div>
        </div>
        <div class="card-body">
          <div class="card-name">${escHtml(c.name)}</div>
          <div class="card-loc">${escHtml(c.city || '')}${c.address ? ', ' + escHtml(c.address) : ''}</div>
          <div class="card-tags">
            ${hasSale ? `<span class="tag sale">${t('card.salesOn')}</span>` : ''}
            ${hasEvent ? `<span class="tag event">${t('card.events')}</span>` : ''}
            ${c.stores ? `<span class="tag">${escHtml(c.stores)}</span>` : ''}
          </div>
          <div class="card-footer">
            <span>${escHtml(todayHours)}</span>
            ${c.phone ? `<span>${escHtml(c.phone)}</span>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function showDetail(id) {
  window.currentDetailCenterId = id;

  const centers = DB.getCenters();
  const posts = DB.getPosts();
  const c = centers.find(x => x.id === id);
  if (!c) return;
  selectedFloor = 'all';

  const openNow = isCenterOpenNow(c);
  const todayHours = getTodayHoursText(c);
  const centerPosts = posts.filter(p => p.centerId === id).sort((a, b) => b.ts - a.ts);
  const centerStores = DB.getStores().filter(s => s.centerId === c.id);
  const storeOnlyCount = centerStores.filter(s => {
    const normalized = normalizeStoreCategory(s.category);
    return normalized !== 'foodDrink' && normalized !== 'services';
  }).length;
  const diningCount = centerStores.filter(s => normalizeStoreCategory(s.category) === 'foodDrink').length;
  const servicesCount = centerStores.filter(s => normalizeStoreCategory(s.category) === 'services').length;
  const heroStyle = c.bannerImage
    ? `background-color:${c.color || '#172E20'};background-image:url('${c.bannerImage}');background-size:${c.zoomBanner || 100}%;background-position:${c.posBannerX || 50}% ${c.posBannerY || 50}%;background-repeat:no-repeat;`
    : '';

  document.getElementById('detail-content').innerHTML = `
    <div class="detail-hero" style="${heroStyle}">
      <div class="detail-hero-info">
        <div class="detail-title">${escHtml(c.name)}</div>
        <div class="detail-addr">${[c.address, c.city, c.zip].filter(Boolean).map(escHtml).join(', ')}</div>
        <div class="detail-meta">
          ${c.phone ? `<span class="detail-meta-item">${escHtml(c.phone)}</span>` : ''}
          <span class="detail-meta-item">${escHtml(todayHours)}</span>
          ${c.website ? `<span class="detail-meta-item"><a href="${escHtml(c.website)}" target="_blank" style="color:var(--gold-mid);text-decoration:none">${t('detail.website')} ↗</a></span>` : ''}
          <span class="badge ${openNow ? 'open' : 'closed'}">${openNow ? t('detail.openNow') : t('card.closed')}</span>
        </div>
      </div>
    </div>

    <div class="detail-layout">
      <div class="detail-top-grid">
        <div class="detail-main">
          ${c.description ? `
            <div class="card-section">
              <div class="card-section-head"><h3>${t('detail.about')}</h3></div>
              <div class="card-section-body">
                <p style="font-size:0.9rem;color:var(--mid);line-height:1.7">${escHtml(c.description)}</p>
              </div>
            </div>` : ''}

          <div class="card-section">
            <div class="card-section-head"><h3>${t('detail.centerDetails')}</h3></div>
            <div class="card-section-body">
              <div class="info-row"><span class="info-label">${t('detail.type')}</span><span class="info-val">${escHtml(t('type.' + c.type) || c.type || '—')}</span></div>
              <div class="info-row"><span class="info-label">${t('detail.hours')}</span><span class="info-val">${getCenterOpeningHoursHtml(c)}</span></div>
              <div class="info-row"><span class="info-label">${t('detail.stores')}</span><span class="info-val">${escHtml(c.stores || '—')}</span></div>
              <div class="info-row"><span class="info-label">${t('detail.parking')}</span><span class="info-val">${escHtml(c.parking || '—')}</span></div>
              <div class="info-row"><span class="info-label">${t('detail.phone')}</span><span class="info-val">${escHtml(c.phone || '—')}</span></div>
              <div class="info-row"><span class="info-label">${t('detail.website')}</span><span class="info-val">${c.website ? `<a href="${escHtml(c.website)}" target="_blank" style="color:var(--gold)">${escHtml(c.website)}</a>` : '—'}</span></div>
            </div>
          </div>
        </div>

        <div class="detail-sidebar">
          <div class="map-box">
            <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);margin-bottom:0.35rem">${t('detail.type')}</div>
            <strong style="color:var(--mid)">${escHtml(c.name)}</strong>
            <span>${[c.address, c.city].filter(Boolean).map(escHtml).join(', ')}</span>
            <a class="map-link" href="https://maps.google.com?q=${encodeURIComponent([c.address, c.city, c.zip].filter(Boolean).join(' '))}" target="_blank">${t('detail.openMaps')}</a>
          </div>

          ${c.amenities ? `
            <div class="card-section">
              <div class="card-section-head"><h3>${t('detail.amenities')}</h3></div>
              <div class="card-section-body">
                <div style="display:flex;flex-wrap:wrap;margin:-3px">
                  ${c.amenities.split(',').map(a => `<span class="amenity-chip">${escHtml(a.trim())}</span>`).join('')}
                </div>
              </div>
            </div>` : ''}
        </div>
      </div>

      <div class="card-section">
        <div class="card-section-head"><h3>${t('detail.floors')}</h3></div>
        <div class="card-section-body">
          ${renderFloorFilters(c.id)}
        </div>
      </div>

      <div class="card-section">
        <div class="card-section-head" style="gap:0;flex-wrap:wrap">
          <button class="detail-tab-btn active" id="dtab-posts" onclick="switchDetailTab('posts', '${c.id}')" style="background:none;border:none;padding:0.6rem 1rem;font-size:0.88rem;font-weight:600;color:var(--charcoal);border-bottom:2px solid var(--gold-mid);cursor:pointer;font-family:inherit">${t('detail.latestPosts')}</button>
          <button class="detail-tab-btn" id="dtab-stores" onclick="switchDetailTab('stores', '${c.id}')" style="background:none;border:none;padding:0.6rem 1rem;font-size:0.88rem;font-weight:500;color:var(--muted);border-bottom:2px solid transparent;cursor:pointer;font-family:inherit">${t('stores.tab')} <span class="store-count-badge">${storeOnlyCount}</span></button>
          <button class="detail-tab-btn" id="dtab-dining" onclick="switchDetailTab('dining', '${c.id}')" style="background:none;border:none;padding:0.6rem 1rem;font-size:0.88rem;font-weight:500;color:var(--muted);border-bottom:2px solid transparent;cursor:pointer;font-family:inherit">${t('stores.tabDining')} <span class="store-count-badge">${diningCount}</span></button>
          <button class="detail-tab-btn" id="dtab-services" onclick="switchDetailTab('services', '${c.id}')" style="background:none;border:none;padding:0.6rem 1rem;font-size:0.88rem;font-weight:500;color:var(--muted);border-bottom:2px solid transparent;cursor:pointer;font-family:inherit">${t('stores.tabServices')} <span class="store-count-badge">${servicesCount}</span></button>
        </div>

        <div id="detail-tab-posts" class="card-section-body">
          ${centerPosts.length ? centerPosts.slice(0, 4).map(p => `
            <div style="padding:0.85rem 0;border-bottom:1px solid var(--warm)">
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem">
                <span class="badge ${p.type}">${p.type}</span>
                <span style="font-size:0.74rem;color:var(--muted)">${escHtml(p.date || '')}</span>
                ${p.endDate ? `<span style="font-size:0.74rem;color:var(--muted)">— ${escHtml(p.endDate)}</span>` : ''}
              </div>
              <div style="font-weight:600;font-size:0.92rem;margin-bottom:0.25rem">${escHtml(p.title)}</div>
              ${p.description ? `<div style="font-size:0.83rem;color:var(--mid)">${escHtml(p.description)}</div>` : ''}
              ${p.discount ? `<div class="feed-discount">${t('feed.discount')} ${escHtml(p.discount)}${t('feed.discountOff')}</div>` : ''}
            </div>`).join('') : `<div style="color:var(--muted);font-size:0.85rem;padding:0.5rem 0">${t('detail.noPosts')}</div>`}
        </div>

        <div id="detail-tab-stores" class="card-section-body" style="display:none">
          ${renderStoreDirectory(c.id, 'stores')}
        </div>

        <div id="detail-tab-dining" class="card-section-body" style="display:none">
          ${renderStoreDirectory(c.id, 'dining')}
        </div>

        <div id="detail-tab-services" class="card-section-body" style="display:none">
          ${renderStoreDirectory(c.id, 'services')}
        </div>
      </div>
    </div>
  `;

  showView('detail');
}

/* =====================
   FEED
   ===================== */
function setFeedFilter(f, el) {
  activeFeedFilter = f;
  document.querySelectorAll('#feed-filters .pill').forEach(x => x.classList.remove('active'));
  if (el) el.classList.add('active');
  renderFeed();
}

function renderFeed() {
  const posts = DB.getPosts();
  const centers = DB.getCenters();
  const filtered = posts
    .filter(p => activeFeedFilter === 'all' || p.type === activeFeedFilter)
    .sort((a, b) => b.ts - a.ts);

  const el = document.getElementById('feed-list');
  if (!el) return;

  if (!filtered.length) {
    el.innerHTML = `
      <div class="empty">
        <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:var(--border2);margin-bottom:0.85rem">+</div>
        <h3>${t('feed.emptyTitle')}</h3>
        <p>${t('feed.emptyDesc')}</p>
      </div>
    `;
    return;
  }

  el.innerHTML = `
    <div class="grid-feed">
      ${filtered.map(p => {
        const center = centers.find(c => c.id === p.centerId);
        return `
          <article class="feed-card ${p.type}" onclick="${center ? `showDetail('${center.id}')` : ''}" style="${center ? 'cursor:pointer' : 'cursor:default'}">
            <div class="feed-icon ${p.type}"></div>
            <div class="feed-body">
              <div class="feed-top">
                <div class="feed-title">${escHtml(p.title)}</div>
                <div class="feed-date">${escHtml(p.date || '')}</div>
              </div>
              <div class="feed-center">${center ? escHtml(center.name) : t('feed.unknownCenter')}</div>
              <div class="feed-desc">${escHtml(p.description || '')}</div>
              ${p.discount ? `<div class="feed-discount">${t('feed.discount')} ${escHtml(p.discount)}${t('feed.discountOff')}</div>` : ''}
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

/* =====================
   ADMIN — PERMISSION HELPERS
   ===================== */
function canEditCenter(centerId) {
  if (!currentUser) return false;
  if (currentUser.role === 'admin') return true;
  return currentUser.centerId === centerId;
}

function visibleCenters() {
  const all = DB.getCenters();
  if (!currentUser) return [];
  if (currentUser.role === 'admin') return all;
  return all.filter(c => c.id === currentUser.centerId);
}

function visiblePosts() {
  const all = DB.getPosts();
  if (!currentUser) return [];
  if (currentUser.role === 'admin') return all;
  return all.filter(p => p.centerId === currentUser.centerId);
}

/* =====================
   ADMIN — CENTERS LIST
   ===================== */
function renderAdminCenters() {
  if (!currentUser) return;

  const centers = visibleCenters();
  document.getElementById('admin-content').innerHTML = `
    <div class="table-panel">
      <div class="table-panel-head">
        <div style="display:flex;align-items:center;gap:0.5rem">
          <h3>${t('admin.centersTitle')}</h3>
          <span class="count">${centers.length}</span>
        </div>
        ${currentUser.role === 'admin' ? `<button class="btn-gold btn-sm" onclick="switchAdmin('add-center')">${t('admin.addCenterBtn')}</button>` : ''}
      </div>

      ${centers.length === 0 ? `
        <div class="empty">
          <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:var(--border2);margin-bottom:0.85rem">+</div>
          <h3>${t('admin.noCenters')}</h3>
          <p>${t('admin.noCentersDesc')}</p>
        </div>` : `
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>${t('admin.colName')}</th>
                <th>${t('admin.colCity')}</th>
                <th>${t('admin.colType')}</th>
                <th>${t('admin.colStatus')}</th>
                <th>${t('admin.colActions')}</th>
              </tr>
            </thead>
            <tbody>
              ${centers.map(c => `
                <tr>
                  <td><span class="fw600">${escHtml(c.name)}</span></td>
                  <td>${escHtml(c.city || '—')}</td>
                  <td><span class="badge news">${escHtml(t('type.' + c.type) || c.type || '—')}</span></td>
                  <td><span class="badge ${isCenterOpenNow(c) ? 'open' : 'closed'}">${isCenterOpenNow(c) ? t('form.statusOpen') : t('form.statusClosed')}</span></td>
                  <td style="display:flex;gap:0.4rem">
                    ${canEditCenter(c.id) ? `<button class="btn-secondary btn-sm" onclick="editCenter('${c.id}')">${t('admin.edit')}</button>` : ''}
                    ${currentUser.role === 'admin' ? `<button class="btn-danger-sm" onclick="confirmDeleteCenter('${c.id}','${escAttr(c.name)}')">${t('admin.delete')}</button>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`}
    </div>
  `;
}

/* =====================
   ADMIN — ADD/EDIT CENTER
   ===================== */
const COLOR_PALETTE = ['#E8F0E8', '#D4EDD4', '#C8E4D0', '#DCF0DC', '#E0EDE4', '#C8DDD4', '#D8E8E0', '#E4F0E4', '#CCE4CC', '#D0ECDA'];

function renderAddCenterForm(existing) {
  if (!currentUser) return;

  if (currentUser.role !== 'admin' && (!existing || !canEditCenter(existing.id))) {
    document.getElementById('admin-content').innerHTML = `
      <div class="access-denied">
        <h3>${t('access.denied')}</h3>
        <p>${t('access.deniedDesc')}</p>
      </div>
    `;
    return;
  }

  const c = existing || {};

  document.getElementById('admin-content').innerHTML = `
    <div class="form-panel">
      <h3>${c.id ? t('form.editCenterTitle') : t('form.addCenterTitle')}</h3>
      <p class="form-subtitle">${c.id ? t('form.editCenterSubtitle') : t('form.addCenterSubtitle')}</p>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('form.name')}</label>
          <input class="form-input" id="f-name" value="${escAttr(c.name || '')}" placeholder="e.g. City Mall">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form.city')}</label>
          <input class="form-input" id="f-city" value="${escAttr(c.city || '')}">
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('form.address')}</label>
          <input class="form-input" id="f-address" value="${escAttr(c.address || '')}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form.zip')}</label>
          <input class="form-input" id="f-zip" value="${escAttr(c.zip || '')}">
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('form.type')}</label>
          <select class="form-select" id="f-type">
            <option value="mall" ${c.type === 'mall' ? 'selected' : ''}>${t('type.mall')}</option>
            <option value="outlet" ${c.type === 'outlet' ? 'selected' : ''}>${t('type.outlet')}</option>
            <option value="market" ${c.type === 'market' ? 'selected' : ''}>${t('type.market')}</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">${t('form.status')}</label>
          <input class="form-input" value="${escAttr(t('form.autoStatus'))}" disabled>
          <div class="form-hint">${t('form.autoStatusHint')}</div>
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('form.website')}</label>
          <input class="form-input" id="f-website" value="${escAttr(c.website || '')}" placeholder="https://">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form.parking')}</label>
          <input class="form-input" id="f-parking" value="${escAttr(c.parking || '')}">
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('form.stores')}</label>
          <input class="form-input" id="f-stores" value="${escAttr(c.stores || '')}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form.phone')}</label>
          <input class="form-input" id="f-phone" value="${escAttr(c.phone || '')}">
        </div>
      </div>

      ${getOpeningHoursFormHtml(c.openingHours || {})}

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Bannerikuva</label>
          <input class="form-input" type="file" id="f-banner-image-file" accept="image/*" onchange="handleBannerImageUpload(event)">
          <input type="hidden" id="f-banner-image" value="${escAttr(c.bannerImage || '')}">
          <div id="banner-image-preview" style="margin-top:0.75rem">${c.bannerImage ? `<img src="${c.bannerImage}" class="center-img-preview" alt="Banner preview">` : ''}</div>
          <button type="button" class="btn-danger-sm" id="clear-banner-btn" style="margin-top:0.75rem;${c.bannerImage ? '' : 'display:none'}" onclick="clearBannerImage()">Poista kuva</button>
        </div>
        <div class="form-group">
          <label class="form-label">Bannerin zoom (%)</label>
          <input class="form-input" type="number" id="f-zoom-banner" value="${escAttr(c.zoomBanner || 100)}" min="50" max="300" step="10" oninput="updateBannerPreview()">
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Bannerin sijainti X (%)</label>
          <input class="form-input" type="number" id="f-pos-banner-x" value="${escAttr(c.posBannerX || 50)}" min="0" max="100" step="1" oninput="updatePosBanner()">
        </div>
        <div class="form-group">
          <label class="form-label">Bannerin sijainti Y (%)</label>
          <input class="form-input" type="number" id="f-pos-banner-y" value="${escAttr(c.posBannerY || 50)}" min="0" max="100" step="1" oninput="updatePosBanner()">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Bannerin esikatselu</label>
        <div id="banner-preview-div" style="height:180px;border-radius:12px;border:1.5px solid var(--border);background:${c.color || COLOR_PALETTE[0]};${c.bannerImage ? `background-image:url('${c.bannerImage}');background-size:${c.zoomBanner || 100}%;background-position:${c.posBannerX || 50}% ${c.posBannerY || 50}%;background-repeat:no-repeat;` : ''}"></div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form.description')}</label>
        <textarea class="form-textarea" id="f-desc" placeholder="${escAttr(t('form.descPlaceholder'))}">${escHtml(c.description || '')}</textarea>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form.floors')}</label>
        <input class="form-input" id="f-floors" value="${escAttr(c.floors || '')}" placeholder="${escAttr(t('form.floorsPlaceholder'))}">
        <div class="form-hint">${t('form.floorsHint')}</div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form.amenities')}</label>
        <input class="form-input" id="f-amenities" value="${escAttr(c.amenities || '')}" placeholder="${escAttr(t('form.amenitiesPlaceholder'))}">
      </div>

      <div class="form-group">
        <label class="form-label">${t('form.cardColor')}</label>
        <div class="color-swatches">
          ${COLOR_PALETTE.map(clr => `
            <div class="color-swatch ${(c.color || COLOR_PALETTE[0]) === clr ? 'selected' : ''}" style="background:${clr}" onclick="selectColor('${clr}',this)"></div>
          `).join('')}
        </div>
        <input type="hidden" id="f-color" value="${escAttr(c.color || COLOR_PALETTE[0])}">
      </div>

      <div class="form-actions">
        <button class="btn-primary" onclick="saveCenter('${escAttr(c.id || '')}')">${c.id ? t('form.save') : t('form.addBtn')}</button>
        <button class="btn-secondary" onclick="switchAdmin('centers')">${t('form.cancel')}</button>
      </div>
    </div>
  `;
}

function selectColor(clr, el) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('f-color').value = clr;
}

function handleBannerImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const img = new Image();
  const reader = new FileReader();

  reader.onload = function(e) {
    img.src = e.target.result;
  };

  img.onload = function() {
    const canvas = document.createElement('canvas');
    const MAX_WIDTH = 2000;

    let width = img.width;
    let height = img.height;

    if (width > MAX_WIDTH) {
      const scale = MAX_WIDTH / width;
      width = MAX_WIDTH;
      height = img.height * scale;
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const base64 = canvas.toDataURL('image/jpeg', 0.9);
    const hidden = document.getElementById('f-banner-image');
    const preview = document.getElementById('banner-image-preview');
    const clearBtn = document.getElementById('clear-banner-btn');

    if (hidden) hidden.value = base64;
    if (preview) preview.innerHTML = `<img src="${base64}" class="center-img-preview" alt="Banner preview">`;
    if (clearBtn) clearBtn.style.display = 'inline-flex';

    updateBannerPreview();
  };

  img.onerror = function() {
    showToast('Kuvan lataus epäonnistui', 'error');
  };

  reader.readAsDataURL(file);
}

function clearBannerImage() {
  const hidden = document.getElementById('f-banner-image');
  const file = document.getElementById('f-banner-image-file');
  const preview = document.getElementById('banner-image-preview');
  const clearBtn = document.getElementById('clear-banner-btn');

  if (hidden) hidden.value = '';
  if (file) file.value = '';
  if (preview) preview.innerHTML = '';
  if (clearBtn) clearBtn.style.display = 'none';

  updateBannerPreview();
}

function handleStoreImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const img = new Image();
  const reader = new FileReader();

  reader.onload = function(e) {
    img.src = e.target.result;
  };

  img.onload = function() {
    const canvas = document.createElement('canvas');
    const MAX_WIDTH = 2000;

    let width = img.width;
    let height = img.height;

    if (width > MAX_WIDTH) {
      const scale = MAX_WIDTH / width;
      width = MAX_WIDTH;
      height = img.height * scale;
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const base64 = canvas.toDataURL('image/jpeg', 0.96);

    document.getElementById('s-image').value = base64;
    document.getElementById('store-image-preview').innerHTML =
      `<img src="${base64}" class="center-img-preview">`;

    const btn = document.getElementById('clear-store-image-btn');
    if (btn) btn.style.display = 'inline-block';

    updateStorePreview();
  };

  reader.readAsDataURL(file);
}

function clearStoreImage() {
  const hidden = document.getElementById('s-image');
  const file = document.getElementById('s-image-file');
  const preview = document.getElementById('store-image-preview');
  const btn = document.getElementById('clear-store-image-btn');

  if (hidden) hidden.value = '';
  if (file) file.value = '';
  if (preview) preview.innerHTML = '';
  if (btn) btn.style.display = 'none';

  updateStorePreview();
  showToast('Liikkeen kuva poistettu', 'info');
}

function updateBannerPreview() {
  const preview = document.getElementById('banner-preview-div');
  if (!preview) return;

  const image = document.getElementById('f-banner-image')?.value || '';
  const color = document.getElementById('f-color')?.value || '#E8F0E8';
  const zoom = parseInt(document.getElementById('f-zoom-banner')?.value || '100', 10);
  const posX = parseInt(document.getElementById('f-pos-banner-x')?.value || '50', 10);
  const posY = parseInt(document.getElementById('f-pos-banner-y')?.value || '50', 10);

  window.bannerPosX = posX;
  window.bannerPosY = posY;

  preview.style.backgroundColor = color;
  preview.style.backgroundImage = image ? `url('${image}')` : 'none';
  preview.style.backgroundSize = `${zoom}%`;
  preview.style.backgroundPosition = `${posX}% ${posY}%`;
  preview.style.backgroundRepeat = 'no-repeat';
  preview.style.backgroundBlendMode = 'normal';
}

function updatePosBanner() {
  updateBannerPreview();
}

function updateStorePreview() {
  const preview = document.getElementById('store-preview-div');
  if (!preview) return;

  const image = document.getElementById('s-image')?.value || '';
  const zoom = parseInt(document.getElementById('s-image-zoom')?.value || '100', 10);
  const posX = 50;
  const posY = 50;

  preview.style.backgroundImage = image ? `url('${image}')` : 'none';
  preview.style.backgroundSize = `${zoom}%`;
  preview.style.backgroundPosition = `${posX}% ${posY}%`;
  preview.style.backgroundRepeat = 'no-repeat';
  preview.innerHTML = image ? '' : `<div class="store-preview-placeholder">Esikatselu näkyy tässä</div>`;
}


async function saveCenter(existingId) {
  if (!currentUser || !['admin', 'manager'].includes(currentUser.role)) return;

  const name = val('f-name');
  const city = val('f-city');

  if (!name) {
    showToast(t('form.nameRequired'), 'error');
    document.getElementById('f-name').focus();
    return;
  }

  if (!city) {
    showToast(t('form.cityRequired'), 'error');
    document.getElementById('f-city').focus();
    return;
  }

  const openingHours = getOpeningHoursFromForm();

  const centerData = {
    name,
    city,
    address: val('f-address'),
    zip: val('f-zip'),
    type: val('f-type'),
    status: 'active',
    phone: val('f-phone'),
    website: val('f-website'),
    hours: JSON.stringify(openingHours),
    stores: val('f-stores'),
    parking: val('f-parking'),
    icon: val('f-banner-image') || '',
    description: val('f-desc'),
    floors: val('f-floors'),
    amenities: val('f-amenities'),
    cardColor: val('f-color') || COLOR_PALETTE[0]
  };

  try {
    if (existingId) {
      await api('/centers/' + existingId, {
        method: 'PUT',
        body: JSON.stringify(centerData)
      });
      showToast(t('form.centerUpdated'), 'success');
    } else {
      await api('/centers', {
        method: 'POST',
        body: JSON.stringify(centerData)
      });
      showToast(t('form.centerAdded'), 'success');
    }
    await loadAllData();
    switchAdmin('centers');
  } catch (err) {
    console.error(err);
    showToast(err.message || 'Virhe tallennuksessa', 'error');
  }
}

function editCenter(id) {
  const c = DB.getCenters().find(x => x.id === id);
  if (!c) return;
  if (!canEditCenter(id)) {
    showToast(t('access.denied'), 'error');
    return;
  }

  renderAddCenterForm(c);
  document.getElementById('sb-add-center')?.classList.add('active');
  document.getElementById('sb-centers')?.classList.remove('active');
}

async function confirmDeleteCenter(id, name) {
  if (!currentUser || !['admin', 'manager'].includes(currentUser.role)) return;

  openModal(
    t('modal.deleteCenterTitle'),
    t('modal.deleteCenterMsg').replace('{name}', name),
    async () => {
      try {
        await api('/centers/' + id, { method: 'DELETE' });
        await loadAllData();
        showToast(t('modal.centerDeleted'), 'info');
        renderAdminCenters();
      } catch (err) {
        console.error(err);
        showToast(err.message || 'Virhe poistossa', 'error');
      }
    }
  );
}

/* =====================
   ADMIN — POSTS
   ===================== */
function renderAdminPosts() {
  if (!currentUser) return;

  const posts = visiblePosts().sort((a, b) => b.ts - a.ts);
  const allCenters = DB.getCenters();

  document.getElementById('admin-content').innerHTML = `
    <div class="table-panel">
      <div class="table-panel-head">
        <div style="display:flex;align-items:center;gap:0.5rem">
          <h3>${t('admin.postsTitle')}</h3>
          <span class="count">${posts.length}</span>
        </div>
        <button class="btn-gold btn-sm" onclick="switchAdmin('add-post')">${t('admin.newPostBtn')}</button>
      </div>

      ${posts.length === 0 ? `
        <div class="empty">
          <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:var(--border2);margin-bottom:0.85rem">+</div>
          <h3>${t('admin.noPosts')}</h3>
          <p>${t('admin.noPostsDesc')}</p>
        </div>` : `
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>${t('admin.colTitle')}</th>
                <th>${t('admin.colCenter')}</th>
                <th>${t('admin.colPostType')}</th>
                <th>${t('admin.colDate')}</th>
                <th>${t('admin.colActions')}</th>
              </tr>
            </thead>
            <tbody>
              ${posts.map(p => {
                const center = allCenters.find(c => c.id === p.centerId);
                return `
                  <tr>
                    <td><span class="fw600">${escHtml(p.title)}</span></td>
                    <td>${center ? escHtml(center.name) : `<span style="color:var(--muted)">—</span>`}</td>
                    <td><span class="badge ${p.type}">${escHtml(p.type)}</span></td>
                    <td style="font-size:0.82rem;color:var(--muted)">${escHtml(p.date || '')}${p.endDate ? ' — ' + escHtml(p.endDate) : ''}</td>
                    <td><button class="btn-danger-sm" onclick="confirmDeletePost('${p.id}','${escAttr(p.title)}')">${t('admin.delete')}</button></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>`}
    </div>
  `;
}

function renderAddPostForm() {
  if (!currentUser) return;

  const centers = visibleCenters();

  document.getElementById('admin-content').innerHTML = `
    <div class="form-panel">
      <h3>${t('form.postTitle')}</h3>
      <p class="form-subtitle">${t('form.postSubtitle')}</p>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('form.selectCenter')}</label>
          <select class="form-select" id="p-center">
            <option value="">${t('form.selectCenterOption')}</option>
            ${centers.map(c => `<option value="${c.id}" ${(centers.length === 1 || currentUser.centerId === c.id) ? 'selected' : ''}>${escHtml(c.name)}</option>`).join('')}
          </select>
          ${centers.length === 0 ? `<div class="form-hint" style="color:var(--red)">${t('form.noCenters')}</div>` : ''}
        </div>

        <div class="form-group">
          <label class="form-label">${t('form.postType')}</label>
          <select class="form-select" id="p-type">
            <option value="sale">${t('form.postTypeSale')}</option>
            <option value="event">${t('form.postTypeEvent')}</option>
            <option value="news">${t('form.postTypeNews')}</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form.postTitleField')}</label>
        <input class="form-input" id="p-title" placeholder="${escAttr(t('form.postTitlePlaceholder'))}">
      </div>

      <div class="form-group">
        <label class="form-label">${t('form.postDesc')}</label>
        <textarea class="form-textarea" id="p-desc" placeholder="${escAttr(t('form.postDescPlaceholder'))}"></textarea>
      </div>

      <div class="form-grid-3">
        <div class="form-group">
          <label class="form-label">${t('form.startDate')}</label>
          <input class="form-input" type="date" id="p-date" value="${todayStr()}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form.endDate')}</label>
          <input class="form-input" type="date" id="p-enddate">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form.discount')} <span style="font-weight:400;text-transform:none">${t('form.discountHint')}</span></label>
          <input class="form-input" type="number" id="p-discount" min="1" max="100">
        </div>
      </div>

      <div class="form-actions">
        <button class="btn-primary" onclick="savePost()">${t('form.publish')}</button>
        <button class="btn-secondary" onclick="switchAdmin('posts')">${t('form.cancel')}</button>
      </div>
    </div>
  `;
}

async function savePost() {
  if (!currentUser) return;

  const centerId = val('p-center');
  const title = val('p-title');

  if (!centerId) {
    showToast(t('form.centerRequired'), 'error');
    return;
  }

  if (!title) {
    showToast(t('form.postTitleRequired'), 'error');
    document.getElementById('p-title').focus();
    return;
  }

  if (!canEditCenter(centerId)) {
    showToast(t('access.denied'), 'error');
    return;
  }

  const postData = {
    centerId,
    type: val('p-type'),
    title,
    description: val('p-desc'),
    startDate: val('p-date'),
    endDate: val('p-enddate'),
    discount: val('p-discount')
  };

  try {
    await api('/posts', {
      method: 'POST',
      body: JSON.stringify(postData)
    });
    await loadAllData();
    showToast(t('form.postPublished'), 'success');
    switchAdmin('posts');
  } catch (err) {
    console.error(err);
    showToast(err.message || 'Virhe julkaisussa', 'error');
  }
}

async function confirmDeletePost(id, name) {
  const post = DB.getPosts().find(p => p.id === id);
  if (post && !canEditCenter(post.centerId)) {
    showToast(t('access.denied'), 'error');
    return;
  }

  openModal(
    t('modal.deletePostTitle'),
    t('modal.deletePostMsg').replace('{name}', name),
    async () => {
      try {
        await api('/posts/' + id, { method: 'DELETE' });
        await loadAllData();
        showToast(t('modal.postDeleted'), 'info');
        renderAdminPosts();
      } catch (err) {
        console.error(err);
        showToast(err.message || 'Virhe poistossa', 'error');
      }
    }
  );
}

/* =====================
   ADMIN — USER MANAGEMENT
   ===================== */
function renderAdminUsers() {
  if (!currentUser || currentUser.role !== 'admin') {
    document.getElementById('admin-content').innerHTML = `
      <div class="access-denied">
        <h3>${t('access.denied')}</h3>
        <p>${t('access.deniedDesc')}</p>
      </div>
    `;
    return;
  }

  const users = getUsers();
  const centers = DB.getCenters();

  document.getElementById('admin-content').innerHTML = `
    <div class="table-panel">
      <div class="table-panel-head">
        <div style="display:flex;align-items:center;gap:0.5rem">
          <h3>${t('admin.usersTitle')}</h3>
          <span class="count">${users.length}</span>
        </div>
      </div>
      <p style="padding:0.75rem 1.5rem;font-size:0.82rem;color:var(--muted);border-bottom:1px solid var(--warm)">${t('admin.usersSubtitle')}</p>

      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('admin.colUser')}</th>
              <th>${t('admin.colRole')}</th>
              <th>${t('admin.colManages')}</th>
              <th>${t('admin.colActions')}</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(u => {
              const center = u.centerId ? centers.find(c => c.id === u.centerId) : null;
              return `
                <tr>
                  <td>
                    <span class="fw600">${escHtml(u.displayName)}</span><br>
                    <span style="font-size:0.78rem;color:var(--muted)">${escHtml(u.username)}</span>
                  </td>
                  <td><span class="badge ${u.role === 'admin' ? 'admin-role' : u.role === 'manager' ? 'manager-role' : 'user-role'}">${getRoleLabel(u.role)}</span></td>
                  <td style="font-size:0.85rem">${center ? escHtml(center.name) : `<span style="color:var(--muted)">—</span>`}</td>
                  <td><button class="btn-secondary btn-sm" onclick="showEditUser('${u.id}')">${t('admin.edit')}</button></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div id="edit-user-panel"></div>
  `;
}

function showEditUser(uid) {
  const users = getUsers();
  const u = users.find(x => x.id === uid);
  if (!u) return;

  const centers = DB.getCenters();

  document.getElementById('edit-user-panel').innerHTML = `
    <div class="form-panel" style="margin-top:1.25rem">
      <h3>${t('admin.editUserTitle')}: ${escHtml(u.displayName)}</h3>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">${t('admin.newPassword')}</label>
          <input class="form-input" type="password" id="eu-pass" placeholder="${escAttr(t('admin.newPasswordHint'))}">
          <div class="form-hint">${t('admin.newPasswordHint')}</div>
        </div>

        ${u.role === 'manager' ? `
          <div class="form-group">
            <label class="form-label">${t('admin.assignCenter')}</label>
            <select class="form-select" id="eu-center">
              <option value="">— ${t('form.selectCenterOption')} —</option>
              ${centers.map(c => `<option value="${c.id}" ${u.centerId === c.id ? 'selected' : ''}>${escHtml(c.name)}</option>`).join('')}
            </select>
          </div>` : '<div></div>'}
      </div>

      <div class="form-actions">
        <button class="btn-primary" onclick="saveUser('${uid}')">${t('admin.saveUser')}</button>
        <button class="btn-secondary" onclick="document.getElementById('edit-user-panel').innerHTML=''">${t('form.cancel')}</button>
      </div>
    </div>
  `;

  document.getElementById('edit-user-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function saveUser(uid) {
  const users = getUsers();
  const user = users.find(u => u.id === uid);
  const newPass = val('eu-pass');
  const centerEl = document.getElementById('eu-center');
  const selectedCenterId = centerEl ? centerEl.value || null : null;

  const updateData = {};
  if (newPass) updateData.password = newPass;
  if (user?.role === 'manager') updateData.centerId = selectedCenterId;

  if (Object.keys(updateData).length === 0) {
    showToast('Ei muutoksia', 'info');
    return;
  }

  try {
    await api('/users/' + uid, {
      method: 'PUT',
      body: JSON.stringify(updateData)
    });

    if (currentUser && currentUser.id === uid) {
      currentUser.centerId = selectedCenterId;
    }

    await loadUsersIfAdmin();
    showToast(t('admin.userSaved'), 'success');
    renderAdminUsers();
  } catch (err) {
    console.error(err);
    showToast(err.message || 'Virhe tallennuksessa', 'error');
  }
}

/* =====================
   STORE CATEGORIES
   ===================== */
function getStoreCategories() {
  return [
    { value: 'fashion', label: t('storecat.fashion') },
    { value: 'foodDrink', label: t('storecat.foodDrink') },
    { value: 'electronics', label: t('storecat.electronics') },
    { value: 'sports', label: t('storecat.sports') },
    { value: 'beauty', label: t('storecat.beauty') },
    { value: 'home', label: t('storecat.home') },
    { value: 'entertainment', label: t('storecat.entertainment') },
    { value: 'services', label: t('storecat.services') },
    { value: 'health', label: t('storecat.health') },
    { value: 'other', label: t('storecat.other') }
  ];
}

function getBusinessTypeFromCategory(category = '') {
  const normalized = normalizeStoreCategory(category);
  if (normalized === 'foodDrink') return 'dining';
  if (normalized === 'services') return 'service';
  return 'store';
}

function getBusinessTypeConfig(type = 'store') {
  const configs = {
    store: {
      title: t('admin.storesTitle'),
      addLabel: t('admin.addStore'),
      addButton: t('admin.addStoreBtn'),
      emptyTitle: t('admin.noStores'),
      emptyDesc: t('admin.noStoresDesc'),
      addTitle: t('form.addStoreTitle'),
      editTitle: t('form.editStoreTitle'),
      fixedCategory: '',
      showCategory: true,
      showWebsite: true,
      listSection: 'stores',
      addSection: 'add-store'
    },
    dining: {
      title: t('stores.tabDining'),
      addLabel: t('admin.addDining'),
      addButton: t('admin.addDiningBtn'),
      emptyTitle: t('admin.noDining'),
      emptyDesc: t('admin.noDiningDesc'),
      addTitle: t('form.addDiningTitle'),
      editTitle: t('form.editDiningTitle'),
      fixedCategory: 'foodDrink',
      showCategory: false,
      showWebsite: false,
      listSection: 'dining',
      addSection: 'add-dining'
    },
    service: {
      title: t('stores.tabServices'),
      addLabel: t('admin.addServiceEntry'),
      addButton: t('admin.addServiceBtn'),
      emptyTitle: t('admin.noServices'),
      emptyDesc: t('admin.noServicesDesc'),
      addTitle: t('form.addServiceTitle'),
      editTitle: t('form.editServiceTitle'),
      fixedCategory: 'services',
      showCategory: false,
      showWebsite: false,
      listSection: 'services',
      addSection: 'add-service'
    }
  };

  return configs[type] || configs.store;
}

function getVisibleStoresByType(type = 'store') {
  const visibleStores = currentUser?.role === 'admin'
    ? DB.getStores()
    : DB.getStores().filter(s => s.centerId === currentUser?.centerId);

  if (type === 'dining') {
    return visibleStores.filter(s => normalizeStoreCategory(s.category) === 'foodDrink');
  }

  if (type === 'service') {
    return visibleStores.filter(s => normalizeStoreCategory(s.category) === 'services');
  }

  return visibleStores.filter(s => {
    const normalized = normalizeStoreCategory(s.category);
    return normalized !== 'foodDrink' && normalized !== 'services';
  });
}

/* =====================
   STORE DIRECTORY — PUBLIC
   ===================== */
function switchDetailTab(tab, centerId) {
  document.querySelectorAll('.detail-tab-btn').forEach(b => {
    const isActive = b.id === 'dtab-' + tab;
    b.style.fontWeight = isActive ? '600' : '500';
    b.style.color = isActive ? 'var(--charcoal)' : 'var(--muted)';
    b.style.borderBottom = isActive ? '2px solid var(--gold-mid)' : '2px solid transparent';
    b.classList.toggle('active', isActive);
  });

  // Show/hide tabs
  document.getElementById('detail-tab-posts').style.display = tab === 'posts' ? '' : 'none';
  document.getElementById('detail-tab-stores').style.display = tab === 'stores' ? '' : 'none';
  document.getElementById('detail-tab-dining').style.display = tab === 'dining' ? '' : 'none';
  document.getElementById('detail-tab-services').style.display = tab === 'services' ? '' : 'none';

  // Update filters and search placeholder for store tabs
  if (['stores', 'dining', 'services'].includes(tab) && centerId) {
    const filtersWrap = document.getElementById(getStoreFiltersId(centerId, tab));
    if (filtersWrap) filtersWrap.style.display = 'flex';

    const searchInput = document.getElementById(getStoreSearchId(centerId, tab));
    if (searchInput) {
      const placeholderMap = {
        stores: t('stores.search'),
        dining: t('stores.searchDining'),
        services: t('stores.searchServices')
      };
      searchInput.placeholder = placeholderMap[tab] || t('stores.search');
    }

    const tabCategoryMap = {
      stores: '__stores__',
      dining: 'foodDrink',
      services: 'services'
    };
    setStoreCategoryFilter(centerId, tabCategoryMap[tab] || '__stores__', tab);
  }
}

function getStoreDirectorySuffix(tab = 'stores') {
  return tab || 'stores';
}

function getStoreSearchId(centerId, tab = 'stores') {
  return `store-search-${centerId}-${getStoreDirectorySuffix(tab)}`;
}

function getStoreFiltersId(centerId, tab = 'stores') {
  return `store-filters-${centerId}-${getStoreDirectorySuffix(tab)}`;
}

function getStoreGridId(centerId, tab = 'stores') {
  return `store-grid-${centerId}-${getStoreDirectorySuffix(tab)}`;
}

function setStoreCategoryFilter(centerId, cat = '', tab = 'stores') {
  const buttons = document.querySelectorAll(`#${getStoreFiltersId(centerId, tab)} .store-pill`);
  buttons.forEach(btn => btn.classList.remove('active'));

  const grid = document.getElementById(getStoreGridId(centerId, tab));
  if (grid) grid.dataset.activeFilter = cat;

  const targetValue = cat === '__stores__' ? '' : cat;
  const targetBtn = Array.from(buttons).find(btn => (btn.dataset.category || '') === targetValue)
    || Array.from(buttons).find(btn => !btn.dataset.category);

  if (targetBtn) targetBtn.classList.add('active');
  filterStores(centerId, cat, undefined, tab);
}

function renderStoreDirectory(centerId, tab = 'stores') {
  const stores = DB.getStores().filter(s => s.centerId === centerId);
  if (!stores.length) return `<div style="color:var(--muted);font-size:0.85rem;padding:0.5rem 0">${t('stores.noStores')}</div>`;

  const cats = [...new Set(stores.map(s => normalizeStoreCategory(s.category)).filter(Boolean))]
    .filter(cat => cat !== 'foodDrink' && cat !== 'services')
    .sort();
  const placeholderMap = {
    stores: t('stores.search'),
    dining: t('stores.searchDining'),
    services: t('stores.searchServices')
  };
  const initialFilterMap = {
    stores: '__stores__',
    dining: 'foodDrink',
    services: 'services'
  };
  const activeFilter = initialFilterMap[tab] || '__stores__';

  return `
    <div class="store-search-bar">
      <input type="text" id="${getStoreSearchId(centerId, tab)}" placeholder="${escAttr(placeholderMap[tab] || t('stores.search'))}" oninput="filterStores('${centerId}', undefined, undefined, '${tab}')">
    </div>
    <div class="store-filters" id="${getStoreFiltersId(centerId, tab)}">
      ${tab === 'stores' ? `
        <button class="store-pill active" data-category="" onclick="filterStores('${centerId}','__stores__',this,'${tab}')">${t('stores.filterAll')}</button>
        ${cats.map(c => `
          <button class="store-pill" data-category="${escAttr(c)}" onclick="filterStores('${centerId}','${escAttr(c)}',this,'${tab}')">
            ${escHtml(t('storecat.' + c))}
          </button>
        `).join('')}
      ` : `
        <button class="store-pill active" data-category="${escAttr(activeFilter)}" onclick="filterStores('${centerId}','${escAttr(activeFilter)}',this,'${tab}')">${t('stores.filterAll')}</button>
      `}
    </div>
    <div class="store-grid" id="${getStoreGridId(centerId, tab)}" data-active-filter="${escAttr(activeFilter)}">
      ${stores.map(s => storeCardHtml(s)).join('')}
    </div>
  `;
}

function renderStoreHoursHtml(s) {
  const rows = [
    { label: t('stores.weekdays'), value: s.hoursWeekday || '' },
    { label: t('stores.saturday'), value: s.hoursSaturday || '' },
    { label: t('stores.sunday'), value: s.hoursSunday || '' }
  ].filter(row => String(row.value || '').trim());

  if (rows.length) {
    return `
      <div class="simple-store-hours-block">
        ${rows.map(row => `
          <div class="simple-store-hours-line">
            <span class="simple-store-hours-label">${row.label}</span>
            <span>${escHtml(row.value)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  return s.hours ? `<div class="simple-store-hours">${escHtml(s.hours)}</div>` : '';
}

function storeCardHtml(s) {
  const hasImage = !!s.image;

  return `
    <div class="store-card ${hasImage ? 'has-image' : 'no-image'}" data-cat="${escAttr(s.category || '')}" data-name="${escAttr((s.name || '').toLowerCase())}" data-floor="${escAttr(s.floor || '')}">
      ${hasImage ? `
        <div class="store-card-image-wrap mall-style-store-image-wrap">
          <div
            class="mall-style-store-image"
            style="
              background-image:url('${s.image}');
              background-size:${s.imageZoom || 100}%;
              background-position:${s.imagePosX || 50}% ${s.imagePosY || 50}%;
              background-repeat:no-repeat;
            "
          ></div>
        </div>
      ` : ''}

      <div class="simple-store-content">
        <div class="store-name simple-store-name">${escHtml(s.name)}</div>

        ${s.floor ? `<div class="simple-store-floor">${t('stores.floor')}: ${escHtml(s.floor)}</div>` : ''}

        ${renderStoreHoursHtml(s)}

        <div class="simple-store-link-row">
          ${s.website
            ? `<a href="${escHtml(s.website)}" target="_blank" class="simple-store-link">${t('stores.website')} ↗</a>`
            : `<span class="simple-store-link muted">—</span>`}
        </div>
      </div>
    </div>
  `;
}

function filterStores(centerId, cat, btnEl, tab = 'stores') {
  if (btnEl) {
    document.querySelectorAll(`#${getStoreFiltersId(centerId, tab)} .store-pill`).forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }

  const q = (document.getElementById(getStoreSearchId(centerId, tab)) || {}).value || '';
  const activeCategoryBtn = document.querySelector(`#${getStoreFiltersId(centerId, tab)} .store-pill.active`);
  const grid = document.getElementById(getStoreGridId(centerId, tab));
  const activeCat = cat !== undefined
    ? cat
    : (grid?.dataset.activeFilter || (activeCategoryBtn ? activeCategoryBtn.dataset.category || '' : '__stores__'));

  if (grid) grid.dataset.activeFilter = activeCat;

  const cards = document.querySelectorAll(`#${getStoreGridId(centerId, tab)} .store-card`);

  cards.forEach(card => {
    const normalizedCat = normalizeStoreCategory(card.dataset.cat || '');
    const matchCat = activeCat === '__stores__'
      ? normalizedCat !== 'foodDrink' && normalizedCat !== 'services'
      : (!activeCat || activeCat === 'all' || normalizedCat === activeCat);
    const matchQ = !q || card.dataset.name.includes(q.toLowerCase());

    card.style.display = (matchCat && matchQ) ? '' : 'none';
  });
}
/* =====================
   ADMIN — STORES LIST
   ===================== */
function renderAdminStores(type = 'store') {
  if (!currentUser) return;

  const config = getBusinessTypeConfig(type);
  const allCenters = DB.getCenters();
  const stores = getVisibleStoresByType(type);

  document.getElementById('admin-content').innerHTML = `
    <div class="table-panel">
      <div class="table-panel-head">
        <div style="display:flex;align-items:center;gap:0.5rem">
          <h3>${config.title}</h3>
          <span class="count">${stores.length}</span>
        </div>
        <button class="btn-gold btn-sm" onclick="switchAdmin('${config.addSection}')">${config.addButton}</button>
      </div>

      ${stores.length === 0
        ? `
          <div class="empty">
            <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;color:var(--border2);margin-bottom:0.85rem">+</div>
            <h3>${config.emptyTitle}</h3>
            <p>${config.emptyDesc}</p>
          </div>`
        : `
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>${t('admin.colStore')}</th>
                  <th>${t('admin.colCenter')}</th>
                  ${config.showCategory ? `<th>${t('admin.colCategory')}</th>` : ''}
                  <th>${t('admin.colFloor')}</th>
                  <th>${t('admin.colActions')}</th>
                </tr>
              </thead>
              <tbody>
                ${stores.map(s => {
                  const center = allCenters.find(c => c.id === s.centerId);
                  return `
                    <tr>
                      <td><span class="fw600">${escHtml(s.name)}</span></td>
                      <td style="font-size:0.85rem">${center ? escHtml(center.name) : '—'}</td>
                      ${config.showCategory ? `<td>${s.category ? `<span class="store-cat">${escHtml(t('storecat.' + normalizeStoreCategory(s.category)))}</span>` : '—'}</td>` : ''}
                      <td style="font-size:0.85rem;color:var(--muted)">${escHtml(s.floor || '—')}</td>
                      <td style="display:flex;gap:0.4rem">
                        <button class="btn-secondary btn-sm" onclick="editStore('${s.id}')">${t('admin.edit')}</button>
                        <button class="btn-danger-sm" onclick="confirmDeleteStore('${s.id}','${escAttr(s.name)}')">${t('admin.delete')}</button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>`}
    </div>
  `;
}

/* =====================
   ADMIN — ADD/EDIT STORE
   ===================== */
function renderAddStoreForm(existing, formType = 'store') {
  if (!currentUser) return;

  const s = existing || {};
  const resolvedType = existing?.id ? getBusinessTypeFromCategory(existing.category) : formType;
  const config = getBusinessTypeConfig(resolvedType);
  const centers = visibleCenters();
  const categoryValue = config.fixedCategory || s.category || '';
  const namePlaceholder = resolvedType === 'dining'
    ? 'e.g. Espresso House'
    : resolvedType === 'service'
      ? 'e.g. Parturi / Apteekki'
      : 'e.g. H&M';

  document.getElementById('admin-content').innerHTML = `
    <div class="form-panel">
      <h3>${s.id ? config.editTitle : config.addTitle}</h3>
      <p class="form-subtitle">${s.id ? t('form.editCenterSubtitle') : t('form.addCenterSubtitle')}</p>

      <div class="store-form-grid">
        <div class="form-group">
          <label class="form-label">${t('form.storeName')}</label>
          <input class="form-input" id="s-name" value="${escAttr(s.name || '')}" placeholder="${escAttr(namePlaceholder)}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('form.storeCenter')}</label>
          <select class="form-select" id="s-center">
            <option value="">${t('form.selectCenterOption')}</option>
            ${centers.map(c => `<option value="${c.id}" ${s.centerId === c.id || (centers.length === 1 && !s.centerId) ? 'selected' : ''}>${escHtml(c.name)}</option>`).join('')}
          </select>
        </div>
      </div>

      ${config.showCategory ? `
        <div class="store-form-grid">
          <div class="form-group">
            <label class="form-label">${t('form.storeCategory')}</label>
            <select class="form-select" id="s-cat">
              <option value="">—</option>
              ${getStoreCategories().map(c => `
                <option value="${c.value}" ${categoryValue === c.value ? 'selected' : ''}>
                  ${c.label}
                </option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">${t('form.storeFloor')}</label>
            <input class="form-input" id="s-floor" value="${escAttr(s.floor || '')}" placeholder="e.g. Floor 1, East Wing">
          </div>
        </div>` : `
        <input type="hidden" id="s-cat" value="${escAttr(categoryValue)}">
        <div class="form-group">
          <label class="form-label">${t('form.storeFloor')}</label>
          <input class="form-input" id="s-floor" value="${escAttr(s.floor || '')}" placeholder="e.g. Floor 1, East Wing">
        </div>`}

      ${config.showWebsite ? `
        <div class="store-form-grid">
          <div class="form-group">
            <label class="form-label">${t('form.storePhone')}</label>
            <input class="form-input" id="s-phone" value="${escAttr(s.phone || '')}">
          </div>
          <div class="form-group">
            <label class="form-label">${t('form.storeWebsite')}</label>
            <input class="form-input" id="s-website" value="${escAttr(s.website || '')}" placeholder="https://">
          </div>
        </div>` : `
        <div class="form-group">
          <label class="form-label">${t('form.storePhone')}</label>
          <input class="form-input" id="s-phone" value="${escAttr(s.phone || '')}">
        </div>`}

      <div class="form-group">
        <label class="form-label">${t('form.storeHours')}</label>
        <div class="store-hours-grid">
          <div>
            <div class="form-hint store-hours-label">${t('stores.weekdays')}</div>
            <input class="form-input" id="s-hours-weekday" value="${escAttr(s.hoursWeekday || s.hours || '')}" placeholder="09:00–21:00">
          </div>
          <div>
            <div class="form-hint store-hours-label">${t('stores.saturday')}</div>
            <input class="form-input" id="s-hours-saturday" value="${escAttr(s.hoursSaturday || '')}" placeholder="10:00–18:00">
          </div>
          <div>
            <div class="form-hint store-hours-label">${t('stores.sunday')}</div>
            <input class="form-input" id="s-hours-sunday" value="${escAttr(s.hoursSunday || '')}" placeholder="12:00–16:00">
          </div>
        </div>
      </div>

      <div class="store-form-grid">
        <div class="form-group">
          <label class="form-label">Liikkeen kuva</label>
          <input class="form-input" type="file" id="s-image-file" accept="image/*" onchange="handleStoreImageUpload(event)">
          <div id="store-image-preview" style="margin-top:10px;">
            ${s.image ? `<img src="${s.image}" class="center-img-preview">` : ''}
          </div>
          <button
            type="button"
            id="clear-store-image-btn"
            class="btn-danger-sm"
            style="margin-top:8px;${s.image ? '' : 'display:none'}"
            onclick="clearStoreImage()"
          >
            Poista kuva
          </button>
          <input type="hidden" id="s-image" value="${escAttr(s.image || '')}">
        </div>
        <div class="form-group">
          <label class="form-label">Kuvan zoom (%)</label>
          <input class="form-input" type="number" id="s-image-zoom" value="${escAttr(s.imageZoom || 100)}" min="50" max="300" step="10" oninput="updateStorePreview()">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${t('form.storeDesc')}</label>
        <textarea class="form-textarea" id="s-desc" placeholder="${escAttr(t('form.storeDescPlaceholder'))}">${escHtml(s.description || '')}</textarea>
      </div>

      <div class="form-actions">
        <button class="btn-primary" onclick="saveStore('${escAttr(s.id || '')}', '${resolvedType}')">${s.id ? t('form.save') : config.addButton}</button>
        <button class="btn-secondary" onclick="switchAdmin('${config.listSection}')">${t('form.cancel')}</button>
      </div>
    </div>
  `;
}

async function saveStore(existingId, formType = 'store') {
  if (!currentUser) return;

  const config = getBusinessTypeConfig(formType);
  const name = val('s-name');
  const centerId = val('s-center');

  if (!name) {
    showToast(t('form.storeNameRequired'), 'error');
    document.getElementById('s-name').focus();
    return;
  }

  if (!centerId) {
    showToast(t('form.centerRequired'), 'error');
    return;
  }

  if (!canEditCenter(centerId)) {
    showToast(t('access.denied'), 'error');
    return;
  }

  const hoursWeekday = val('s-hours-weekday');
  const hoursSaturday = val('s-hours-saturday');
  const hoursSunday = val('s-hours-sunday');

  const storeData = {
    centerId,
    name,
    category: config.fixedCategory || val('s-cat'),
    floor: val('s-floor'),
    phone: val('s-phone'),
    hours: [
      hoursWeekday ? `Ma–Pe ${hoursWeekday}` : '',
      hoursSaturday ? `La ${hoursSaturday}` : '',
      hoursSunday ? `Su ${hoursSunday}` : ''
    ].filter(Boolean).join(' • '),
    website: config.showWebsite ? val('s-website') : '',
    description: val('s-desc'),
    image: val('s-image'),
    imageZoom: parseInt(val('s-image-zoom') || '100', 10),
    imagePosX: 50,
    imagePosY: 50,
    type: formType
  };

  try {
    if (existingId) {
      await api('/stores/' + existingId, {
        method: 'PUT',
        body: JSON.stringify(storeData)
      });
      showToast(t('form.storeUpdated'), 'success');
    } else {
      await api('/stores', {
        method: 'POST',
        body: JSON.stringify(storeData)
      });
      showToast(t('form.storeAdded'), 'success');
    }
    await loadAllData();
    switchAdmin(config.listSection);
  } catch (err) {
    console.error(err);
    showToast(err.message || 'Virhe tallennuksessa', 'error');
  }
}

function editStore(id) {
  const s = DB.getStores().find(x => x.id === id);
  if (!s) return;

  const formType = getBusinessTypeFromCategory(s.category);
  const config = getBusinessTypeConfig(formType);

  renderAddStoreForm(s, formType);
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));

  const addBtn = document.getElementById('sb-' + config.addSection);
  if (addBtn) addBtn.classList.add('active');
}

async function confirmDeleteStore(id, name) {
  const store = DB.getStores().find(s => s.id === id);
  if (store && !canEditCenter(store.centerId)) {
    showToast(t('access.denied'), 'error');
    return;
  }

  openModal(
    t('modal.deleteCenterTitle'),
    t('modal.deleteCenterMsg').replace('{name}', name),
    async () => {
      try {
        await api('/stores/' + id, { method: 'DELETE' });
        await loadAllData();
        showToast(t('form.storeDeleted'), 'info');
        renderAdminStores();
      } catch (err) {
        console.error(err);
        showToast(err.message || 'Virhe poistossa', 'error');
      }
    }
  );
}
function normalizeStoreCategory(category) {
  const map = {
    'Muoti': 'fashion',
    'Ruoka & Juoma': 'foodDrink',
    'Elektroniikka': 'electronics',
    'Urheilu': 'sports',
    'Kauneus': 'beauty',
    'Koti': 'home',
    'Viihde': 'entertainment',
    'Palvelut': 'services',
    'Terveys': 'health',
    'Muu': 'other',

    'Fashion': 'fashion',
    'Food & Drink': 'foodDrink',
    'Electronics': 'electronics',
    'Sports': 'sports',
    'Beauty': 'beauty',
    'Home': 'home',
    'Entertainment': 'entertainment',
    'Services': 'services',
    'Health': 'health',
    'Other': 'other',

    'Mode': 'fashion',
    'Mat & Dryck': 'foodDrink',
    'Elektronik': 'electronics',
    'Sport': 'sports',
    'Skönhet': 'beauty',
    'Hem': 'home',
    'Underhållning': 'entertainment',
    'Tjänster': 'services',
    'Hälsa': 'health',
    'Övrigt': 'other'
  };

  return map[category] || category;
}
function migrateStoreCategories() {
  const stores = DB.getStores();
  let changed = false;

  const updated = stores.map(store => {
    const normalized = normalizeStoreCategory(store.category);
    if (normalized !== store.category) changed = true;
    return {
      ...store,
      category: normalized
    };
  });

  if (changed) {
    appData.stores = updated;
    // Ei tallenneta localStorageen, koska backend on nykyään datan lähde.
  }
}

/* =====================
   UTILITIES
   ===================== */
function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escAttr(s) {
  return String(s)
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* =====================
   INIT
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const confirmModal = document.getElementById('confirm-modal');
  if (confirmModal) {
    confirmModal.addEventListener('click', e => {
      if (e.target.id === 'confirm-modal') closeModal();
    });
  }

  document.addEventListener('click', e => {
    const wrap = document.querySelector('.user-menu-wrap');
    const menu = document.getElementById('user-dropdown');
    if (!wrap || !menu) return;
    if (!wrap.contains(e.target)) menu.classList.remove('show');
  });

  migrateStoreCategories();
  applyAppSettings();

  const langBtn = document.getElementById('lang-' + currentLang);
  if (langBtn) langBtn.classList.add('active');

  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.id !== 'lang-' + currentLang) b.classList.remove('active');
  });

  document.documentElement.lang = currentLang;
  applyTranslations();
  renderNavAuth();
  renderLoginHints();

  // Check if user is logged in
  (async () => {
    try {
      const data = await api('/me');
      currentUser = data.user;
      await loadAllData();
      const defaultView = currentUser.role === 'user'
        ? 'discover'
        : getAppSettings().defaultView || 'admin';
      showView(['discover', 'feed', 'admin'].includes(defaultView) ? defaultView : 'admin');
    } catch {
      currentUser = null;
      renderNavAuth();
      await loadPublicData();
      showView('discover');
    }
  })();
});
