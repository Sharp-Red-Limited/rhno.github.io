'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b19d5868fb117081a00946213c9d0c52",
"index.html": "45eb1679202250245cebeacbe32c09e6",
"/": "45eb1679202250245cebeacbe32c09e6",
"LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"CNAME": "45b9bd2f1cb964a836b074ae78b4ba62",
"main.dart.js": "479d627ee1552099eec08f05a2fd786c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "da7bc48595209823700d66ce83c4f96c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7e931d505baffb8f189b974d4d95f30b",
".git/ORIG_HEAD": "72e3f050b9b9afc7f65b741b038b4d24",
".git/config": "e6125c55fc60dbb11105be7844616ec5",
".git/objects/3e/dbc347dce03eb1e1d7f8e032a880d88222618d": "948ee8ee3b9c1c5ebd5e23401753869a",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/4a2d33228dd1b26141be6a1ddfaccd105d92cb": "07e8c5dc51c6c8df629039cc96a9f309",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/85abe17aee5ef2fc699de4a7778b82e9ffd523": "b667939bb4479b8a13b4b7e3872425e4",
".git/objects/04/0764d8fb1cc8f8be0d59e1026ae4979a11c5f0": "5bb9e88d4f93bc39ada9e0d363cedc46",
".git/objects/32/3c706c456934bc7d8a766cae388d6c05248751": "13d86992f8ec2878e8c094cdc1a8fefa",
".git/objects/35/4b4e9701d390771b038384f974bcf53ebb7f27": "fa5172a5e7570c62772d5362e22b5a6d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/7f09dba80914cf74e599ca5198a4fc2c1ca5b0": "a7b2504609d526777f7893e6bcad8941",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/56/e9ed05c1941b61ee959bd3b0140c3531b3a5a4": "8be1dbc1c1d4cad44f56d910b93a34e3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/593148d3200e885e5bc86e6c06fa314e6eadaa": "ba6e3dbc84d2d33d50e73040dc7f9d21",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/399e27daf83b203552aba08ffa6b93fff6796f": "e500b73068f8ddc45b83bf414ec857f2",
".git/objects/94/882f6e2b65a26620a0534a663e54c525fb5abc": "0693699c574a7d87e2160e0cfca759ff",
".git/objects/05/6a60e8e72ca94be607e4d04d445f6ba37001bb": "a64a04a188dae6d227cf4b4e6b56edc8",
".git/objects/05/a3fa29389be6d35d5cedbaf83235dcb3824099": "34712ebd54e2211f3f8ac2012dded540",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9d/dbba3f66a010fbec9ef007b47b3bcfa6f8b45b": "7d8f25add8aa80010a8835b88a597fed",
".git/objects/02/f73b600855f6c799b447c3293747b640c0a915": "b97da3454fb61f77e80f2f4385dd23db",
".git/objects/b5/a9e7c510d6c905eb4d83f2d7bfe38bc23d783d": "69dfed60d517d359d73a2c3e528044bd",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/5b5c1925d8ab1314ef8def2d8a863db1a13bde": "7ab8a5deacd6feb6c0b7a4fb3d0679df",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/1dbe5d12870ed11ec5cee41dec12f82fcf4daf": "e479db6f01a2f2f5b29b5199573522e2",
".git/objects/a2/56d5a8b21c153af69b42a4603eb78206a20419": "7f7de56cb9d4f32bc066cfc6ece922dd",
".git/objects/bd/dc98ef0d79e1eee9c880a55b8cbe666eb13eb5": "fc11b0293682b1ea4d475978cb7385fe",
".git/objects/d1/1852c88f049bd230b90cd5933cf88e41bafe90": "ec0ab01b39fff64b0fb30cc54313796c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/69885a725349ada252818e7b313ee948229375": "fccdacdaa485c2000ea6a248fd2ee259",
".git/objects/f4/ecdbc5bede8592009af123cae3ad5321fb81d5": "cc7dda5f51dfaeb1f22aac1f88a0ab36",
".git/objects/f3/96058b28f5701b24dc759fd6ebc7dae15f8bba": "65eb74675e3782f2d94a0d35ec4f0ce0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/f21e9a839940af8d0fba269ca3176798bee1cd": "d5c144de7e4617e23ea0596fb06026a7",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/f2/9b8ed55c927f020e693a5500f44505a2492bba": "dcb383a0fdb8c8b69a19d170452a94cb",
".git/objects/f5/3ba525fb2127a8352e1f14116fed4e7c37d0c5": "ab745721ad2388004ceec97f442b4685",
".git/objects/e4/884c8859b4ea4c4b20832105c9ec0666d241a8": "bde4a1a62c491d5e625228fe8844d23b",
".git/objects/fe/5f04312990435de3e2e72a040b6385e3bb0168": "29645d6ab5c8881d5e1a271f2b0a78c3",
".git/objects/c8/61d9ae6d28ab6bdeccab4017118c9d53efff8e": "62d79b8381045f49f35aa3d2baae5d3a",
".git/objects/c1/0f764788b1cc3845d861cf5f7b5ce80e81ab5b": "a79ca3098055686bc5734562da8eb01b",
".git/objects/c6/e7c550c2caf2624dbac86ae516dd3d9d2b73a5": "33fcaf2222160350d75e9d0b1f8f9ddb",
".git/objects/c6/7250cdd2caa4f997d5a65650eb7b2a8b603db2": "5b62c8a55ba20394d4270af871cce270",
".git/objects/ec/9e64bacc7c74e55f329e36015b49151726d954": "c8cb2a3ab143e1473cfb8f31574e9703",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/80b5f1c8fc58e802af63c807ad5d8c9ff41dcb": "fc264edc21792c337ef1e80fcc4a20a4",
".git/objects/4b/5b44e2a5d17ead8108d07ae28ab8fc9fa7fc73": "8ef659efe14860bc0eb6ea18c14e21c0",
".git/objects/pack/pack-6d9f50ed3a9d2308284abbeae2b47021b9d05459.pack": "ef5a7a19c6775ab9bc74aeeacc6ded13",
".git/objects/pack/pack-6d9f50ed3a9d2308284abbeae2b47021b9d05459.idx": "d4e87d41a67ceefe6bbfcd7ecab46367",
".git/objects/1f/d55b968c695c656694b249ff3497ef63a6213b": "c7c064027541c69813ab4a4e4882ec8f",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/80/e549fbeee8cd3dfafbdab626657386ae9af188": "af675eb1bb76e64abef2bbfb186708d8",
".git/objects/1a/a4bcc271505d3e143541a4332d0d0fb82d7455": "b7bbb594cc0999225a8673e9bcac64bc",
".git/objects/17/88393210098f7aee9d14f71e36c0dca6c81fb3": "f399a9906adc32d93c84d98983e0f3d9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/81/0717e6c0b2a8515335d1a2005aa93d4c44a8d0": "f90034bc09b0f17a31d2d5624ca08a13",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2b193cb77a3478b530fef7347980db01064886": "d18150020193bf8610410db3ed3b8d6c",
".git/objects/6b/cf7df1f702350d5c6e505788df56a0bbc014e7": "72636d9f3ea715542bf05863ab50bbb8",
".git/objects/38/8da3d2867e18faced347977e6f064acfd1100d": "50759a35142c55776a9e07d6c9ef2400",
".git/objects/00/3b4bc595e4eb2a61c469ec6a8eba2076702051": "b062a420f20e14347caebbf2c207631d",
".git/objects/62/01b4bec6c83c55f97854787e107fd709fcb55c": "b5f7db0140f613e2fce7bb1b6241a6b5",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/d1b012b014d71ec54f21976e912d6b6f67c6f8": "7e568e25879185d5a6e0043bcecdcbc0",
".git/objects/30/fac32b9a91b4c52920620454125d419da79964": "c50ca45741d34566baf3fe7596502d92",
".git/objects/30/39b934eff9642992161d2eaf037e10baadf90b": "71cd8e651e384d73007b88ce4f5b4d70",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/08/01034154b683f65bf02a0ecff213e740aeb865": "43630e26ebe2842e4bbd28abee186d99",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/97/02fc7230035ca69435aa4f5b06790e9a8895b0": "fb2824746fe36f65b421ac8c1db51631",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/0a/73a13a770cef48a331718ea6e5a85b3f9ea7bf": "9fa76d32c4890575c0a0d118be0e35e5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/acad88872d12a4421342ff7b980b0962270463": "d0ee909f19d0ff75232b9b0b1f1cf506",
".git/objects/a7/f82c5cdbd058eeb11351dfa89b9cfac10ee5eb": "6af1fbf3c58e1e3015bc9270ce78f64c",
".git/objects/a7/7d1e7bab4e1b9ece2a87f438dac16b22be0bb4": "a66ee65bdec0c755568e44a55fb4f5c8",
".git/objects/dd/c53dd29f5faf7797e400cdae48ef437bcfd34d": "d70fde42e4495528e88da548b346fa2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/aea9832d25aa00499eed750f159f1d3c38bda2": "b5daad25e295a46e1b3efb718f9f949d",
".git/objects/de/c5733c4469730aa029a27e37d4750ba5f54107": "188ddf00843ac66339a49d2fcd128c21",
".git/objects/b0/88adc38f24cb213cd3cfb37fe50eddc890aa7e": "7a4f4671d29f8ccbb0b7ddab6bece3d2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3ba1568c95173718e730d8c428aaae0ceb0829": "f456b9201cdbd5d3edadd02545431d5b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c4/2f6a154ded96b5ae896e60eff4f6c70bf8085d": "07288891745b02ca4ba594d159d078bb",
".git/objects/c4/878350d9185c7df7045ac5ca56b4c502702ab6": "40efec1dfc42e501b74195fb62d852e1",
".git/objects/f6/b7b380a1dd1bcc1b9bbaea5a26fe7b7435b99d": "633053d859273a8a57aea151b7aa178a",
".git/objects/f6/58da70eced59266d00d3368d86256a368579e3": "f375d3552f0a5f0eca9e702490eba955",
".git/objects/e7/1e3d637f7af47928b6fee9226fd891f0922c3d": "e5327df5a548faf6a896fd2338b91f1d",
".git/objects/cb/ad00d73a5c70ba1685677b4ab93f12326bed5a": "ec57b6fd31e69a1bf5bdc535c640c375",
".git/objects/cb/e0174cfa5e2df23daa4e0254dee35f74cce02b": "ed2a80185af5426976c795eaa5793fed",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/7ad76e3ea74d03996c3c4ca833ce11fe41cdc8": "a2075fd5beea3767b9211f576d5c9a20",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/804c78a7dc9fdb150a5fd5dbb49ec2e753d550": "af3c20dd83ee6ef00550326dd11596e5",
".git/objects/12/70af620566caa661529e9c44d6d5d8f5ac1b83": "1cdfc664a8ca6c81aea5d86f1ed26cc8",
".git/objects/8c/81a8a25df29b0c84de0e10d93a5dea567d2590": "1713b6d32e7c3bfe36d92d01218ec4b3",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/58477b47aeedcd6c04416664851370b971bd82": "bfacad94153e1dcda9920c347671f438",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/82/9d0b4f587af72f653507d3cfd92263d5b4ca22": "ed282ea7f6f7d97e55257daef2048f15",
".git/objects/49/3b661814a80f06bafa301b1b43c9d2c9918642": "7ddce46e787d3a92cb2132b4025af0d3",
".git/objects/49/6ee2ca6a2f08396a4076fe43dedf3dc0da8b6d": "6589e8096e1d164d9dddd885d15a514e",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/8b/2678eaec80ba8ef3caccba6fabc6a1608d190f": "667ee334ce23bfefc317009fc50ca8b1",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "324aa37df83067b09a89e13d1ac155e1",
".git/logs/refs/heads/main": "5f301fef77e3d1022ee06bf03173e0cf",
".git/logs/refs/remotes/origin/HEAD": "5d1b07df22273906ad95d219f875fe24",
".git/logs/refs/remotes/origin/main": "4936f42a39d22268743e4257e69763fc",
".git/logs/refs/stash": "3757b95ec6bba5dde344227e1b838ca4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9bbd392de2e68ed18deb8e9a7ab5157d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9bbd392de2e68ed18deb8e9a7ab5157d",
".git/refs/stash": "f7350f3e5d94965c0aaf7e91f3785f5e",
".git/index": "32b5e1600e1a794c9007d9b0e9a91204",
".git/packed-refs": "9621343bddc0eadd3521ba7a8ac02811",
".git/COMMIT_EDITMSG": "217c8d76677ab2bec3315c95957cff43",
".git/FETCH_HEAD": "2794b7c407a405ad7657f6a5b52729ef",
"assets/AssetManifest.json": "1694f6f09dcf0b7d526e2180cfd33052",
"assets/NOTICES": "44ae85ef27c6ec71e3a3ae35c05f17f3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ab0564eed12b4b55dcfd486e870668ee",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/headshot.jpg": "aea3bb83be1496640691f83ae5710bd2",
"assets/assets/P3260011.JPG": "54995b62493a2616df53020d191d9f68",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
