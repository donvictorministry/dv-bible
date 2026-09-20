
window.DV = window.DV || {};
DV.build = "DV-Hymns-1.0";
const HYMNS = [
{t:"Amazing Grace", a:"John Newton, 1779", verses:[
"Amazing grace! How sweet the sound,\nThat saved a wretch like me!\nI once was lost, but now am found,\nWas blind but now I see.",
"'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed.",
"Through many dangers, toils, and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home.",
"When we've been there ten thousand years,\nBright shining as the sun,\nWe've no less days to sing God's praise\nThan when we'd first begun."]},
{t:"Be Thou My Vision", a:"Ancient Irish hymn, trans. Mary Byrne, 1905", verses:[
"Be Thou my Vision, O Lord of my heart;\nNaught be all else to me, save that Thou art—\nThou my best thought, by day or by night,\nWaking or sleeping, Thy presence my light.",
"Be Thou my Wisdom, and Thou my true Word;\nI ever with Thee and Thou with me, Lord;\nThou my great Father, I Thy true son;\nThou in me dwelling, and I with Thee one.",
"Riches I heed not, nor man's empty praise,\nThou mine inheritance, now and always:\nThou and Thou only, first in my heart,\nHigh King of heaven, my treasure Thou art."]},
{t:"Blessed Assurance", a:"Fanny Crosby, 1873", verses:[
"Blessed assurance, Jesus is mine!\nO what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood.",
"Perfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels descending bring from above\nEchoes of mercy, whispers of love.",
"Perfect submission, all is at rest,\nI in my Savior am happy and blest,\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love."]},
{t:"Come Thou Fount of Every Blessing", a:"Robert Robinson, 1758", verses:[
"Come, Thou Fount of every blessing,\nTune my heart to sing Thy grace;\nStreams of mercy, never ceasing,\nCall for songs of loudest praise.",
"Here I raise my Ebenezer;\nHither by Thy help I'm come;\nAnd I hope, by Thy good pleasure,\nSafely to arrive at home.",
"O to grace how great a debtor\nDaily I'm constrained to be!\nLet Thy goodness, like a fetter,\nBind my wandering heart to Thee."]},
{t:"Crown Him with Many Crowns", a:"Matthew Bridges, 1851", verses:[
"Crown Him with many crowns,\nThe Lamb upon His throne;\nHark! how the heavenly anthem drowns\nAll music but its own.",
"Crown Him the Lord of love,\nBehold His hands and side,\nRich wounds, yet visible above,\nIn beauty glorified.",
"Crown Him the Lord of peace,\nWhose power a scepter sways\nFrom pole to pole, that wars may cease,\nAnd all be prayer and praise."]},
{t:"Holy, Holy, Holy", a:"Reginald Heber, 1826", verses:[
"Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy! Merciful and mighty!\nGod in three Persons, blessed Trinity!",
"Holy, holy, holy! All the saints adore Thee,\nCasting down their golden crowns around the glassy sea;\nCherubim and seraphim falling down before Thee,\nWhich wert, and art, and evermore shalt be.",
"Holy, holy, holy! Though the darkness hide Thee,\nThough the eye of sinful man Thy glory may not see,\nOnly Thou art holy; there is none beside Thee,\nPerfect in power, in love, and purity."]},
{t:"How Firm a Foundation", a:"John Rippon's Selection, 1787", verses:[
"How firm a foundation, ye saints of the Lord,\nIs laid for your faith in His excellent Word!\nWhat more can He say than to you He hath said,\nTo you who for refuge to Jesus have fled?",
"Fear not, I am with thee, O be not dismayed,\nFor I am thy God and will still give thee aid;\nI'll strengthen thee, help thee, and cause thee to stand,\nUpheld by My righteous, omnipotent hand."]},
{t:"I Need Thee Every Hour", a:"Annie S. Hawks, 1872", verses:[
"I need Thee every hour,\nMost gracious Lord;\nNo tender voice like Thine\nCan peace afford.",
"I need Thee every hour,\nStay Thou nearby;\nTemptations lose their power\nWhen Thou art nigh.",
"I need Thee, O I need Thee;\nEvery hour I need Thee;\nO bless me now, my Savior,\nI come to Thee."]},
{t:"Jesus Loves Me", a:"Anna B. Warner, 1860", verses:[
"Jesus loves me! This I know,\nFor the Bible tells me so;\nLittle ones to Him belong,\nThey are weak but He is strong.",
"Jesus loves me, this I know,\nAs He loved so long ago,\nTaking children on His knee,\nSaying, 'Let them come to Me.'",
"Yes, Jesus loves me! Yes, Jesus loves me!\nYes, Jesus loves me! The Bible tells me so."]},
{t:"Joy to the World", a:"Isaac Watts, 1719", verses:[
"Joy to the world! The Lord is come;\nLet earth receive her King;\nLet every heart prepare Him room,\nAnd heaven and nature sing.",
"He rules the world with truth and grace,\nAnd makes the nations prove\nThe glories of His righteousness,\nAnd wonders of His love."]},
{t:"Just As I Am", a:"Charlotte Elliott, 1835", verses:[
"Just as I am, without one plea,\nBut that Thy blood was shed for me,\nAnd that Thou bidd'st me come to Thee,\nO Lamb of God, I come, I come!",
"Just as I am, and waiting not\nTo rid my soul of one dark blot,\nTo Thee whose blood can cleanse each spot,\nO Lamb of God, I come, I come!"]},
{t:"Leaning on the Everlasting Arms", a:"Elisha Hoffman, 1887", verses:[
"What a fellowship, what a joy divine,\nLeaning on the everlasting arms;\nWhat a blessedness, what a peace is mine,\nLeaning on the everlasting arms.",
"Leaning, leaning,\nSafe and secure from all alarms;\nLeaning, leaning,\nLeaning on the everlasting arms."]},
{t:"Nearer, My God, to Thee", a:"Sarah F. Adams, 1841", verses:[
"Nearer, my God, to Thee, nearer to Thee!\nE'en though it be a cross that raiseth me,\nStill all my song shall be,\nNearer, my God, to Thee, nearer to Thee!",
"Though like the wanderer, the sun gone down,\nDarkness be over me, my rest a stone,\nYet in my dreams I'd be\nNearer, my God, to Thee, nearer to Thee!"]},
{t:"O for a Thousand Tongues to Sing", a:"Charles Wesley, 1739", verses:[
"O for a thousand tongues to sing\nMy great Redeemer's praise,\nThe glories of my God and King,\nThe triumphs of His grace!",
"My gracious Master and my God,\nAssist me to proclaim,\nTo spread through all the earth abroad,\nThe honors of Thy name."]},
{t:"O Little Town of Bethlehem", a:"Phillips Brooks, 1868", verses:[
"O little town of Bethlehem,\nHow still we see thee lie!\nAbove thy deep and dreamless sleep\nThe silent stars go by;\nYet in thy dark streets shineth\nThe everlasting Light;\nThe hopes and fears of all the years\nAre met in thee tonight."]},
{t:"Rock of Ages", a:"Augustus Toplady, 1763", verses:[
"Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed,\nBe of sin the double cure,\nSave from wrath and make me pure.",
"Nothing in my hand I bring,\nSimply to Thy cross I cling;\nNaked, come to Thee for dress;\nHelpless, look to Thee for grace;\nFoul, I to the fountain fly;\nWash me, Savior, or I die."]},
{t:"Silent Night", a:"Joseph Mohr, 1818", verses:[
"Silent night, holy night,\nAll is calm, all is bright\nRound yon virgin mother and child.\nHoly infant so tender and mild,\nSleep in heavenly peace,\nSleep in heavenly peace."]},
{t:"Sweet Hour of Prayer", a:"William Walford, 1845", verses:[
"Sweet hour of prayer! Sweet hour of prayer!\nThat calls me from a world of care,\nAnd bids me at my Father's throne\nMake all my wants and wishes known.",
"In seasons of distress and grief,\nMy soul has often found relief,\nAnd oft escaped the tempter's snare,\nBy thy return, sweet hour of prayer!"]},
{t:"There Is a Fountain", a:"William Cowper, 1772", verses:[
"There is a fountain filled with blood\nDrawn from Emmanuel's veins;\nAnd sinners plunged beneath that flood\nLose all their guilty stains.",
"Lose all their guilty stains,\nLose all their guilty stains;\nAnd sinners plunged beneath that flood\nLose all their guilty stains."]},
{t:"What a Friend We Have in Jesus", a:"Joseph M. Scriven, 1855", verses:[
"What a friend we have in Jesus,\nAll our sins and griefs to bear!\nWhat a privilege to carry\nEverything to God in prayer!",
"O what peace we often forfeit,\nO what needless pain we bear,\nAll because we do not carry\nEverything to God in prayer."]},
{t:"When I Survey the Wondrous Cross", a:"Isaac Watts, 1707", verses:[
"When I survey the wondrous cross\nOn which the Prince of glory died,\nMy richest gain I count but loss,\nAnd pour contempt on all my pride.",
"See, from His head, His hands, His feet,\nSorrow and love flow mingled down;\nDid e'er such love and sorrow meet,\nOr thorns compose so rich a crown?"]},
{t:"Onward, Christian Soldiers", a:"Sabine Baring-Gould, 1865", verses:[
"Onward, Christian soldiers,\nMarching as to war,\nWith the cross of Jesus\nGoing on before.",
"At the sign of triumph\nSatan's host doth flee;\nOn then, Christian soldiers,\nOn to victory!"]},
{t:"It Is Well with My Soul", a:"Horatio Spafford, 1873", verses:[
"When peace, like a river, attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, Thou hast taught me to say,\nIt is well, it is well with my soul.",
"It is well (it is well),\nWith my soul (with my soul),\nIt is well, it is well with my soul."]},
{t:"Trust and Obey", a:"John H. Sammis, 1887", verses:[
"When we walk with the Lord\nIn the light of His Word,\nWhat a glory He sheds on our way!\nWhile we do His good will,\nHe abides with us still,\nAnd with all who will trust and obey.",
"Trust and obey, for there's no other way\nTo be happy in Jesus,\nBut to trust and obey."]},
{t:"Come, Thou Almighty King", a:"Anonymous, 1757", verses:[
"Come, Thou Almighty King,\nHelp us Thy name to sing,\nHelp us to praise!\nFather all glorious,\nO'er all victorious,\nCome and reign over us,\nAncient of Days!"]},
{t:"Guide Me, O Thou Great Jehovah", a:"William Williams, 1745", verses:[
"Guide me, O Thou great Jehovah,\nPilgrim through this barren land;\nI am weak, but Thou art mighty,\nHold me with Thy powerful hand;\nBread of heaven, Bread of heaven,\nFeed me till I want no more."]},
{t:"For the Beauty of the Earth", a:"Folliott S. Pierpoint, 1864", verses:[
"For the beauty of the earth,\nFor the glory of the skies,\nFor the love which from our birth\nOver and around us lies;\nLord of all, to Thee we raise\nThis our hymn of grateful praise."]},
{t:"All Hail the Power of Jesus' Name", a:"Edward Perronet, 1779", verses:[
"All hail the power of Jesus' name!\nLet angels prostrate fall;\nBring forth the royal diadem,\nAnd crown Him Lord of all.",
"Ye chosen seed of Israel's race,\nYe ransomed from the fall,\nHail Him who saves you by His grace,\nAnd crown Him Lord of all."]},
{t:"Fairest Lord Jesus", a:"Münster Gesangbuch, 1677", verses:[
"Fairest Lord Jesus,\nRuler of all nature,\nO Thou of God and man the Son;\nThee will I cherish,\nThee will I honor,\nThou, my soul's glory, joy, and crown."]},
{t:"O Worship the King", a:"Robert Grant, 1833", verses:[
"O worship the King, all glorious above,\nO gratefully sing His power and His love;\nOur Shield and Defender, the Ancient of Days,\nPavilioned in splendor, and girded with praise."]},
{t:"Praise to the Lord, the Almighty", a:"Joachim Neander, 1680; trans. Catherine Winkworth", verses:[
"Praise to the Lord, the Almighty, the King of creation!\nO my soul, praise Him, for He is thy health and salvation!\nAll ye who hear, now to His temple draw near,\nJoin me in glad adoration."]},
{t:"Come, Ye Thankful People, Come", a:"Henry Alford, 1844", verses:[
"Come, ye thankful people, come,\nRaise the song of harvest home;\nAll is safely gathered in,\nEre the winter storms begin."]},
{t:"Standing on the Promises", a:"R. Kelso Carter, 1886", verses:[
"Standing on the promises of Christ my King,\nThrough eternal ages let His praises ring;\nGlory in the highest, I will shout and sing,\nStanding on the promises of God."]},
{t:"Shall We Gather at the River", a:"Robert Lowry, 1864", verses:[
"Shall we gather at the river,\nWhere bright angel feet have trod,\nWith its crystal tide forever\nFlowing by the throne of God?",
"Yes, we'll gather at the river,\nThe beautiful, the beautiful river;\nGather with the saints at the river\nThat flows by the throne of God."]},
{t:"Softly and Tenderly", a:"Will L. Thompson, 1880", verses:[
"Softly and tenderly Jesus is calling,\nCalling for you and for me;\nSee, on the portals He's waiting and watching,\nWatching for you and for me."]},
{t:"Turn Your Eyes Upon Jesus", a:"Helen H. Lemmel, 1922", verses:[
"O soul, are you weary and troubled?\nNo light in the darkness you see?\nThere's light for a look at the Savior,\nAnd life more abundant and free.",
"Turn your eyes upon Jesus,\nLook full in His wonderful face,\nAnd the things of earth will grow strangely dim,\nIn the light of His glory and grace."]},
{t:"My Faith Has Found a Resting Place", a:"Eliza E. Hewitt, 1891", verses:[
"My faith has found a resting place,\nNot in device or creed;\nI trust the Ever-living One,\nHis wounds for me shall plead."]},
{t:"Take My Life and Let It Be", a:"Frances R. Havergal, 1874", verses:[
"Take my life, and let it be\nConsecrated, Lord, to Thee;\nTake my moments and my days,\nLet them flow in ceaseless praise."]},
{t:"O Come, All Ye Faithful", a:"John Francis Wade, c.1743", verses:[
"O come, all ye faithful,\nJoyful and triumphant,\nO come ye, O come ye to Bethlehem;\nCome and behold Him,\nBorn the King of angels;\nO come, let us adore Him, Christ the Lord."]},
{t:"Hark! The Herald Angels Sing", a:"Charles Wesley, 1739", verses:[
"Hark! The herald angels sing,\nGlory to the newborn King;\nPeace on earth, and mercy mild,\nGod and sinners reconciled.",
"Joyful, all ye nations, rise,\nJoin the triumph of the skies;\nWith the angelic host proclaim,\nChrist is born in Bethlehem."]},
{t:"Christ the Lord Is Risen Today", a:"Charles Wesley, 1739", verses:[
"Christ the Lord is risen today, Alleluia!\nSons of men and angels say, Alleluia!\nRaise your joys and triumphs high, Alleluia!\nSing, ye heavens, and earth reply, Alleluia!"]},
{t:"Higher Ground", a:"Johnson Oatman Jr., 1898", verses:[
"I'm pressing on the upward way,\nNew heights I'm gaining every day;\nStill praying as I onward bound,\nLord, plant my feet on higher ground.",
"Lord, lift me up and let me stand,\nBy faith, on Heaven's tableland,\nA higher plane than I have found;\nLord, plant my feet on higher ground."]},
{t:"Abide with Me", a:"Henry F. Lyte, 1847", verses:[
"Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide;\nWhen other helpers fail and comforts flee,\nHelp of the helpless, oh, abide with me.",
"Swift to its close ebbs out life's little day;\nEarth's joys grow dim, its glories pass away;\nChange and decay in all around I see—\nO Thou who changest not, abide with me.",
"Not a brief glance I beg, a passing word;\nBut as Thou dwell'st with Thy disciples, Lord,\nFamiliar, condescending, patient, free.\nCome not to sojourn, but abide with me.",
"Come not in terrors, as the King of kings,\nBut kind and good, with healing in Thy wings,\nTears for all woes, a heart for every plea—\nCome, Friend of sinners, and thus abide with me.",
"Thou on my head in early youth didst smile;\nAnd, though rebellious and perverse meanwhile,\nThou hast not left me, oft as I left Thee,\nOn to the close, O Lord, abide with me.",
"I need Thy presence every passing hour;\nWhat but Thy grace can foil the tempter’s pow’r?\nWho, like Thyself, my guide and stay can be?\nThrough cloud and sunshine, Lord, abide with me.",
"I fear no foe, with Thee at hand to bless;\nIlls have no weight, and tears no bitterness;\nWhere is death's sting? Where, grave, thy victory?\nI triumph still, if Thou abide with me.",
"Hold Thou Thy cross before my closing eyes;\nShine through the gloom and point me to the skies;\nHeaven's morning breaks, and earth's vain shadows flee;\nIn life, in death, O Lord, abide with me."]},
{t:"And Can It Be That I Should Gain", a:"Charles Wesley, 1738", verses:[
"And can it be that I should gain\nAn interest in the Savior's blood?\nDied He for me, who caused His pain—\nFor me, who Him to death pursued?\nAmazing love! How can it be,\nThat Thou, my God, shouldst die for me?",
"'Tis mystery all: th'Immortal dies:\nWho can explore His strange design?\nIn vain the firstborn seraph tries\nTo sound the depths of love divine.\n'Tis mercy all! Let earth adore,\nLet angel minds inquire no more.",
"He left His Father's throne above\nSo free, so infinite His grace—\nEmptied Himself of all but love,\nAnd bled for Adam's helpless race:\n'Tis mercy all, immense and free,\nFor O my God, it found out me!",
"Long my imprisoned spirit lay,\nFast bound in sin and nature's night;\nThine eye diffused a quickening ray—\nI woke, the dungeon flamed with light;\nMy chains fell off, my heart was free,\nI rose, went forth, and followed Thee.",
"No condemnation now I dread;\nJesus, and all in Him, is mine;\nAlive in Him, my living Head,\nAnd clothed in righteousness divine,\nBold I approach th'eternal throne,\nAnd claim the crown, through Christ my own."]},
{t:"O God, Our Help in Ages Past", a:"Isaac Watts, 1719", verses:[
"O God, our help in ages past,\nOur hope for years to come,\nOur shelter from the stormy blast,\nAnd our eternal home.",
"Under the shadow of Thy throne\nThy saints have dwelt secure;\nSufficient is Thine arm alone,\nAnd our defense is sure.",
"Before the hills in order stood,\nOr earth received her frame,\nFrom everlasting Thou art God,\nTo endless years the same.",
"A thousand ages in Thy sight\nAre like an evening gone;\nShort as the watch that ends the night\nBefore the rising sun.",
"The busy tribes of flesh and blood,\nWith all their lives and cares,\nAre carried downwards by Thy flood,\nAnd lost in following years.",
"Time, like an ever-rolling stream,\nBears all its sons away;\nThey fly forgotten, as a dream\nDies at the opening day.",
"Like flowery fields the nations stand\nPleased with the morning light;\nThe flowers beneath the mower's hand\nLie withering ere 'tis night.",
"O God, our help in ages past,\nOur hope for years to come,\nBe Thou our guard while troubles last,\nAnd our eternal home."]},
{t:"Jesus Shall Reign Where'er the Sun", a:"Isaac Watts, 1719", verses:[
"Jesus shall reign where'er the sun\nDoes his successive journeys run;\nHis kingdom stretch from shore to shore,\nTill moons shall wax and wane no more.",
"Behold the islands with their kings,\nAnd Europe her best tribute brings;\nFrom north to south the princes meet\nTo pay their homage at His feet.",
"There Persia, glorious to behold,\nThere India shines in eastern gold;\nAnd barbarous nations at His word\nSubmit, and bow, and own their Lord.",
"To Him shall endless prayer be made,\nAnd praises throng to crown His head;\nHis Name like sweet perfume shall rise\nWith every morning sacrifice.",
"People and realms of every tongue\nDwell on His love with sweetest song;\nAnd infant voices shall proclaim\nTheir early blessings on His Name.",
"Blessings abound where'er He reigns;\nThe prisoner leaps to lose his chains;\nThe weary find eternal rest,\nAnd all the sons of want are blest.",
"Where He displays His healing power,\nDeath and the curse are known no more:\nIn Him the tribes of Adam boast\nMore blessings than their father lost.",
"Let every creature rise and bring\nPeculiar honors to our King;\nAngels descend with songs again,\nAnd earth repeat the loud amen!"]},
{t:"Come, Ye Sinners, Poor and Needy", a:"Joseph Hart, 1759", verses:[
"Come, ye sinners, poor and needy,\nWeak and wounded, sick and sore;\nJesus ready stands to save you,\nFull of pity, love and power.",
"Come, ye thirsty, come, and welcome,\nGod's free bounty glorify;\nTrue belief and true repentance,\nEvery grace that brings you nigh.",
"Come, ye weary, heavy laden,\nLost and ruined by the fall;\nIf you tarry till you're better,\nYou will never come at all.",
"View Him prostrate in the garden;\nOn the ground your Maker lies.\nOn the bloody tree behold Him;\nSinner, will this not suffice?",
"Lo! th'incarnate God ascended,\nPleads the merit of His blood:\nVenture on Him, venture wholly,\nLet no other trust intrude.",
"Let not conscience make you linger,\nNor of fitness fondly dream;\nAll the fitness He requireth\nIs to feel your need of Him."]},
{t:"How Sweet the Name of Jesus Sounds", a:"John Newton, 1779", verses:[
"How sweet the Name of Jesus sounds\nIn a believer's ear!\nIt soothes his sorrows, heals his wounds,\nAnd drives away his fear.",
"It makes the wounded spirit whole,\nAnd calms the troubled breast;\n'Tis manna to the hungry soul,\nAnd to the weary, rest.",
"Dear Name, the rock on which I build,\nMy shield and hiding place,\nMy never-failing treasury, filled\nWith boundless stores of grace!",
"By Thee my prayers acceptance gain,\nAlthough with sin defiled;\nSatan accuses me in vain,\nAnd I am owned a child.",
"Jesus, my Shepherd, Husband, Friend,\nMy Prophet, Priest, and King,\nMy Lord, my Life, my Way, my End,\nAccept the praise I bring.",
"Weak is the effort of my heart,\nAnd cold my warmest thought;\nBut when I see Thee as Thou art,\nI'll praise Thee as I ought.",
"Till then I would Thy love proclaim\nWith every fleeting breath,\nAnd may the music of Thy Name\nRefresh my soul in death!"]},
{t:"Love Divine, All Loves Excelling", a:"Charles Wesley, 1747", verses:[
"Love divine, all loves excelling,\nJoy of heaven, to earth come down,\nFix in us Thy humble dwelling,\nAll Thy faithful mercies crown.\nJesus, Thou art all compassion,\nPure, unbounded love Thou art;\nVisit us with Thy salvation,\nEnter every trembling heart.",
"Breathe, O breathe Thy loving Spirit\nInto every troubled breast!\nLet us all in Thee inherit,\nLet us find that second rest.\nTake away our bent to sinning,\nAlpha and Omega be;\nEnd of faith, as its beginning,\nSet our hearts at liberty.",
"Come, Almighty to deliver,\nLet us all Thy life receive;\nSuddenly return, and never,\nNevermore Thy temples leave.\nThee we would be always blessing,\nServe Thee as Thy hosts above,\nPray, and praise Thee without ceasing,\nGlory in Thy perfect love.",
"Finish then Thy new creation,\nPure and spotless let us be;\nLet us see Thy great salvation,\nPerfectly restored in Thee:\nChanged from glory into glory,\nTill in heaven we take our place,\nTill we cast our crowns before Thee,\nLost in wonder, love, and praise."]},
{t:"Alas! and Did My Savior Bleed", a:"Isaac Watts, 1707", verses:[
"Alas! and did my Savior bleed\nAnd did my Sovereign die?\nWould He devote that sacred head\nFor such a worm as I?",
"Thy body slain, sweet Jesus, Thine—\nAnd bathed in its own blood—\nWhile all exposed to wrath divine,\nThe glorious Sufferer stood!",
"Was it for crimes that I had done\nHe groaned upon the tree?\nAmazing pity! grace unknown!\nAnd love beyond degree!",
"Well might the sun in darkness hide\nAnd shut his glories in,\nWhen Christ, the mighty Maker died,\nFor man the creature's sin.",
"Thus might I hide my blushing face\nWhile His dear cross appears,\nDissolve my heart in thankfulness,\nAnd melt my eyes to tears.",
"But drops of grief can ne'er repay\nThe debt of love I owe:\nHere, Lord, I give my self away\n'Tis all that I can do."]},
{t:"O For a Closer Walk with God", a:"William Cowper, 1772", verses:[
"O for a closer walk with God,\nA calm and heavenly frame,\nA light to shine upon the road\nThat leads me to the Lamb!",
"Where is the blessedness I knew,\nWhen first I saw the Lord?\nWhere is the soul-refreshing view\nOf Jesus and His Word?",
"What peaceful hours I once enjoyed!\nHow sweet their memory still!\nBut they have left an aching void\nThe world can never fill.",
"Return, O holy Dove, return,\nSweet messenger of rest!\nI hate the sins that made Thee mourn\nAnd drove Thee from my breast.",
"The dearest idol I have known,\nWhate'er that idol be,\nHelp me to tear it from Thy throne,\nAnd worship only Thee.",
"So shall my walk be close with God,\nCalm and serene my frame;\nSo purer light shall mark the road\nThat leads me to the Lamb."]},
{t:"A Mighty Fortress Is Our God", a:"Martin Luther, 1529", verses:[
"A mighty fortress is our God,\nA bulwark never failing;\nOur Helper He, amid the flood\nOf mortal ills prevailing.\nFor still our ancient foe\nDoth seek to work us woe;\nHis craft and power are great,\nAnd armed with cruel hate,\nOn earth is not his equal.",
"Did we in our own strength confide,\nOur striving would be losing,\nWere not the right Man on our side,\nThe Man of God's own choosing.\nDost ask who that may be?\nChrist Jesus, it is He;\nLord Sabaoth His Name,\nFrom age to age the same,\nAnd He must win the battle.",
"And though this world, with devils filled,\nShould threaten to undo us,\nWe will not fear, for God hath willed\nHis truth to triumph through us.\nThe Prince of Darkness grim,\nWe tremble not for him;\nHis rage we can endure,\nFor lo! his doom is sure;\nOne little word shall fell him.",
"That Word above all earthly powers,\nNo thanks to them, abideth;\nThe Spirit and the gifts are ours\nThrough Him who with us sideth.\nLet goods and kindred go,\nThis mortal life also;\nThe body they may kill:\nGod's truth abideth still;\nHis kingdom is forever!"]},
{t:"Beneath the Cross of Jesus", a:"Elizabeth C. Clephane, 1868", verses:[
"Beneath the cross of Jesus\nI fain would take my stand,\nThe shadow of a mighty rock\nWithin a weary land;\nA home within the wilderness,\nA rest upon the way,\nFrom the burning of the noontide heat,\nAnd the burden of the day.",
"O safe and happy shelter,\nO refuge tried and sweet,\nO trysting place where Heaven's love\nAnd Heaven's justice meet!\nAs to the holy patriarch\nThat wondrous dream was given,\nSo seems my Savior's cross to me,\nA ladder up to heaven.",
"There lies beneath its shadow\nBut on the further side\nThe darkness of an awful grave\nThat gapes both deep and wide\nAnd there between us stands the cross\nTwo arms outstretched to save\nLike a watchman set to guard the way\nFrom that eternal grave.",
"Upon that cross of Jesus\nMine eye at times can see\nThe very dying form of One\nWho suffered there for me;\nAnd from my smitten heart with tears\nTwo wonders I confess:\nThe wonders of His glorious love\nAnd my own worthlessness.",
"I take, O cross, thy shadow\nFor my abiding place;\nI ask no other sunshine than\nThe sunshine of His face;\nContent to let the world go by,\nTo know no gain nor loss,\nMy sinful self my only shame,\nMy glory all the cross."]},
{t:"Blessed Be the Tie That Binds", a:"John Fawcett, 1782", verses:[
"Blessed be the tie that binds\nOur hearts in Christian love;\nThe fellowship of kindred minds\nIs like to that above.",
"Before our Father's throne\nWe pour our ardent prayers;\nOur fears, our hopes, our aims are one\nOur comforts and our cares.",
"We share our mutual woes,\nOur mutual burdens bear;\nAnd often for each other flows\nThe sympathizing tear.",
"When we asunder part,\nIt gives us inward pain;\nBut we shall still be joined in heart,\nAnd hope to meet again.",
"This glorious hope revives\nOur courage by the way;\nWhile each in expectation lives,\nAnd longs to see the day.",
"From sorrow, toil and pain,\nAnd sin, we shall be free,\nAnd perfect love and friendship reign\nThrough all eternity."]},
{t:"Come, We That Love the Lord", a:"Isaac Watts, 1707", verses:[
"Come, we that love the Lord,\nAnd let our joys be known;\nJoin in a song with sweet accord,\nAnd thus surround the throne.",
"The sorrows of the mind\nBe banished from the place;\nReligion never was designed\nTo make our pleasures less.",
"Let those refuse to sing\nThat never knew our God;\nBut favorites of the heavenly King\nMay speak their joys abroad.",
"The God that rules on high,\nAnd thunders when He please,\nThat rides upon the stormy sky,\nAnd manages the seas—",
"This awful God is ours,\nOur Father and our love;\nHe shall send down His heavenly powers\nTo carry us above.",
"There shall we see His face,\nAnd never, never sin;\nThere, from the rivers of His grace,\nDrink endless pleasures in.",
"Yes, and before we rise\nTo that immortal state,\nThe thoughts of such amazing bliss\nShould constant joys create.",
"The men of grace have found\nGlory begun below;\nCelestial fruits on earthly ground\nFrom faith and hope may grow.",
"The hill of Zion yields\nA thousand sacred sweets\nBefore we reach the heavenly fields,\nOr walk the golden streets.",
"Then let our songs abound,\nAnd every tear be dry;\nWe're marching through Immanuel's ground\nTo fairer worlds on high."]},
{t:"God Moves in a Mysterious Way", a:"William Cowper, 1774", verses:[
"God moves in a mysterious way\nHis wonders to perform;\nHe plants His footsteps in the sea\nAnd rides upon the storm.",
"Deep in unfathomable mines\nOf never-failing skill\nHe treasures up His bright designs\nAnd works His sovereign will.",
"Ye fearful saints, fresh courage take;\nThe clouds ye so much dread\nAre big with mercy and shall break\nIn blessings on your head.",
"Judge not the Lord by feeble sense,\nBut trust Him for His grace;\nBehind a frowning providence\nHe hides a smiling face.",
"His purposes will ripen fast,\nUnfolding every hour;\nThe bud may have a bitter taste,\nBut sweet will be the flower.",
"Blind unbelief is sure to err,\nAnd scan His work in vain;\nGod is His own interpreter,\nAnd He will make it plain."]},
{t:"Grace! 'Tis a Charming Sound", a:"Philip Doddridge, 1740", verses:[
"Grace! 'tis a charming sound,\nHarmonious to the ear;\nHeaven with the echo shall resound,\nAnd all the earth shall hear.",
"Grace first contrived a way\nTo save rebellious man,\nAnd all the steps that grace display,\nWhich drew the wondrous plan.",
"Grace first inscribed my name\nIn God's eternal book;\n'Twas grace that gave me to the Lamb,\nWho all my sorrows took.",
"Grace led my roving feet\nTo tread the heavenly road,\nAnd new supplies each hour I meet,\nWhile pressing on to God.",
"Grace taught my soul to pray,\nAnd made my eyes o'erflow;\n'Twas grace that kept me to this day,\nAnd will not let me go.",
"Grace all the work shall crown\nThrough everlasting days;\nIt lays in heaven the topmost stone,\nAnd well deserves the praise."]},
{t:"I Heard the Voice of Jesus Say", a:"Horatius Bonar, 1846", verses:[
"I heard the voice of Jesus say,\n\"Come unto Me and rest;\nLay down, thou weary one, lay down\nThy head upon My breast.\"\nI came to Jesus as I was,\nWeary and worn and sad;\nI found in Him a resting place,\nAnd He has made me glad.",
"I heard the voice of Jesus say,\n\"Behold, I freely give\nThe living water; thirsty one,\nStoop down and drink, and live.\"\nI came to Jesus, and I drank\nOf that life-giving stream;\nMy thirst was quenched, my soul revived,\nAnd now I live in Him.",
"I heard the voice of Jesus say,\n\"I am this dark world's Light;\nLook unto Me, thy morn shall rise,\nAnd all thy day be bright.\"\nI looked to Jesus, and I found\nIn Him my Star, my Sun;\nAnd in that light of life I'll walk,\nTill traveling days are done."]},
{t:"Immortal, Invisible, God Only Wise", a:"Walter Chalmers Smith, 1867", verses:[
"Immortal, invisible, God only wise,\nIn light inaccessible hid from our eyes,\nMost blessed, most glorious, the Ancient of Days,\nAlmighty, victorious, Thy great Name we praise.",
"Unresting, unhasting, and silent as light,\nNor wanting, nor wasting, Thou rulest in might;\nThy justice like mountains high soaring above\nThy clouds which are fountains of goodness and love.",
"To all life Thou givest, to both great and small;\nIn all life Thou livest, the true life of all;\nWe blossom and flourish as leaves on the tree,\nAnd wither and perish, but naught changeth Thee.",
"Great Father of Glory, pure Father of Light\nThine angels adore Thee, all veiling their sight;\nAll laud we would render, O help us to see:\n'Tis only the splendor of light hideth Thee.",
"All laud we would render, O help us to see:\n'Tis only the splendor of light hideth Thee.\nAnd so let Thy glory, Almighty, impart,\nThrough Christ in the story, Thy Christ to the heart."]},
{t:"It Came Upon the Midnight Clear", a:"Edmund Sears, 1849", verses:[
"It came upon the midnight clear,\nThat glorious song of old,\nFrom angels bending near the earth\nTo touch their harps of gold:\n\"Peace on the earth, good will to men,\nFrom heaven's all-gracious King.\"\nThe world in solemn stillness lay,\nTo hear the angels sing.",
"Still through the cloven skies they come\nWith peaceful wings unfurled,\nAnd still their heavenly music floats\nO'er all the weary world;\nAbove its sad and lowly plains,\nThey bend on hovering wing,\nAnd ever o'er its Babel sounds\nThe blessed angels sing.",
"Yet with the woes of sin and strife\nThe world has suffered long;\nBeneath the angel strain have rolled\nTwo thousand years of wrong;\nAnd man, at war with man, hears not\nThe love-song which they bring;\nO hush the noise, ye men of strife,\nAnd hear the angels sing.",
"And ye, beneath life's crushing load,\nWhose forms are bending low,\nWho toil along the climbing way\nWith painful steps and slow,\nLook now! for glad and golden hours\nCome swiftly on the wing.\nO rest beside the weary road,\nAnd hear the angels sing!",
"For lo! the days are hastening on,\nBy prophet seen of old,\nWhen with the ever-circling years\nShall come the time foretold\nWhen peace shall over all the earth\nIts ancient splendors fling,\nAnd the whole world send back the song\nWhich now the angels sing."]},
{t:"Jesus, Lover of My Soul", a:"Charles Wesley, 1740", verses:[
"Jesus, lover of my soul,\nLet me to Thy bosom fly,\nWhile the nearer waters roll,\nWhile the tempest still is high.\nHide me, O my Savior, hide,\nTill the storm of life is past;\nSafe into the haven guide;\nO receive my soul at last.",
"Other refuge have I none,\nHangs my helpless soul on Thee;\nLeave, ah! leave me not alone,\nStill support and comfort me.\nAll my trust on Thee is stayed,\nAll my help from Thee I bring;\nCover my defenseless head\nWith the shadow of Thy wing.",
"Wilt Thou not regard my call?\nWilt Thou not accept my prayer?\nLo! I sink, I faint, I fall—\nLo! on Thee I cast my care;\nReach me out Thy gracious hand!\nWhile I of Thy strength receive,\nHoping against hope I stand,\nDying, and behold, I live.",
"Thou, O Christ, art all I want,\nMore than all in Thee I find;\nRaise the fallen, cheer the faint,\nHeal the sick, and lead the blind.\nJust and holy is Thy Name,\nI am all unrighteousness;\nFalse and full of sin I am;\nThou art full of truth and grace.",
"Plenteous grace with Thee is found,\nGrace to cover all my sin;\nLet the healing streams abound;\nMake and keep me pure within.\nThou of life the fountain art,\nFreely let me take of Thee;\nSpring Thou up within my heart;\nRise to all eternity."]},
{t:"Jesus, the Very Thought of Thee", a:"Bernard of Clairvaux, 12th C.", verses:[
"Jesus, the very thought of Thee\nWith sweetness fills my breast;\nBut sweeter far Thy face to see,\nAnd in Thy presence rest.",
"Nor voice can sing, nor heart can frame,\nNor can the memory find\nA sweeter sound than Thy blest Name,\nO Savior of mankind!",
"O hope of every contrite heart,\nO joy of all the meek,\nTo those who fall, how kind Thou art!\nHow good to those who seek!",
"But what to those who find? Ah, this\nNor tongue nor pen can show;\nThe love of Jesus, what it is,\nNone but His loved ones know.",
"Jesus, our only joy be Thou,\nAs Thou our prize wilt be;\nJesus, be Thou our glory now,\nAnd through eternity."]},
{t:"My Hope Is Built on Nothing Less", a:"Edward Mote, 1834", verses:[
"My hope is built on nothing less\nThan Jesus' blood and righteousness;\nI dare not trust the sweetest frame,\nBut wholly lean on Jesus' name.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand.",
"When darkness veils His lovely face,\nI rest on His unchanging grace;\nIn every high and stormy gale,\nMy anchor holds within the veil.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand.",
"His oath, His covenant, His blood,\nSupport me in the whelming flood;\nWhen all around my soul gives way,\nHe then is all my hope and stay.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand.",
"When He shall come with trumpet sound,\nOh, may I then in Him be found;\nDressed in His righteousness alone,\nFaultless to stand before the throne.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand."]},
{t:"Nothing But the Blood", a:"Robert Lowry, 1876", verses:[
"What can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus.\nOh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
"For my pardon, this I see,\nNothing but the blood of Jesus;\nFor my cleansing this my plea,\nNothing but the blood of Jesus.\nOh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
"Nothing can for sin atone,\nNothing but the blood of Jesus;\nNaught of good that I have done,\nNothing but the blood of Jesus.\nOh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
"This is all my hope and peace,\nNothing but the blood of Jesus;\nThis is all my righteousness,\nNothing but the blood of Jesus.\nOh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
"Now by this I'll overcome—\nNothing but the blood of Jesus;\nNow by this I'll reach my home—\nNothing but the blood of Jesus.\nOh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
"Glory! Glory! This I sing—\nNothing but the blood of Jesus,\nAll my praise for this I bring—\nNothing but the blood of Jesus.\nOh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus."]},
{t:"O Sacred Head, Now Wounded", a:"Paul Gerhardt, 1656", verses:[
"O sacred Head, now wounded,\nWith grief and shame weighed down,\nNow scornfully surrounded\nWith thorns, Thine only crown;\nO sacred Head, what glory,\nWhat bliss till now was Thine!\nYet, though despised and gory,\nI joy to call Thee mine.",
"What Thou, my Lord, hast suffered,\nWas all for sinners' gain;\nMine, mine was the transgression,\nBut Thine the deadly pain.\nLo, here I fall, my Savior!\n'Tis I deserve Thy place;\nLook on me with Thy favor,\nVouchsafe to me Thy grace.",
"What language shall I borrow\nTo thank Thee, dearest friend,\nFor this Thy dying sorrow,\nThy pity without end?\nO make me Thine forever,\nAnd should I fainting be,\nLord, let me never, never\nOutlive my love to Thee.",
"Be near me when I'm dying,\nO show Thy cross to me,\nAnd to my succor flying,\nCome, Lord, and set me free!\nThese eyes, new faith receiving,\nFrom Jesus shall not move,\nFor he who dies believing,\nDies safely through Thy love."]},
{t:"Praise, My Soul, the King of Heaven", a:"Henry F. Lyte, 1834", verses:[
"Praise, my soul, the King of heaven;\nTo His feet thy tribute bring.\nRansomed, healed, restored, forgiven,\nEvermore His praises sing:\nAlleluia! Alleluia!\nPraise the everlasting King.",
"Praise Him for His grace and favor\nTo our fathers in distress.\nPraise Him still the same as ever,\nSlow to chide, and swift to bless.\nAlleluia! Alleluia!\nGlorious in His faithfulness.",
"Father-like He tends and spares us;\nWell our feeble frame He knows.\nIn His hands He gently bears us,\nRescues us from all our foes.\nAlleluia! Alleluia!\nWidely yet His mercy flows.",
"Frail as summer's flower we flourish,\nBlows the wind and it is gone;\nBut while mortals rise and perish,\nOur God lives unchanging on.\nAlleluia! Alleluia!\nPraise the high eternal One!",
"Angels, help us to adore Him;\nYe behold Him face to face;\nSun and moon, bow down before Him,\nDwellers all in time and space.\nAlleluia! Alleluia!\nPraise with us the God of grace."]},
{t:"The Church's One Foundation", a:"Samuel J. Stone, 1866", verses:[
"The Church's one foundation\nIs Jesus Christ her Lord;\nShe is His new creation\nBy water and the Word:\nFrom heav'n He came and sought her\nTo be His holy bride;\nWith His own blood He bought her,\nAnd for her life He died.",
"Elect from every nation,\nYet one o'er all the earth,\nHer charter of salvation\nOne Lord, one faith, one birth;\nOne holy name she blesses,\nPartakes one holy food,\nAnd to one hope she presses,\nWith every grace endued.",
"Though with a scornful wonder\nMen see her sore oppressed,\nBy schisms rent asunder,\nBy heresies distressed,\nYet saints their watch are keeping,\nTheir cry goes up, 'How long?'\nAnd soon the night of weeping\nShall be the morn of song.",
"'Mid toil and tribulation,\nAnd tumult of her war,\nShe waits the consummation\nOf peace forevermore;\nTill with the vision glorious\nHer longing eyes are blest,\nAnd the great Church victorious\nShall be the Church at rest.",
"Yet she on earth hath union\nWith God the Three in One,\nAnd mystic sweet communion\nWith those whose rest is won.\nO happy ones and holy!\nLord, give us grace that we\nLike them, the meek and lowly,\nOn high may dwell with Thee."]},
{t:"There Is a Land of Pure Delight", a:"Isaac Watts, 1707", verses:[
"There is a land of pure delight,\nWhere saints immortal reign;\nInfinite day excludes the night,\nAnd pleasures banish pain.",
"There everlasting spring abides,\nAnd never-withering flowers:\nDeath, like a narrow sea, divides\nThis heavenly land from ours.",
"Sweet fields beyond the swelling flood\nStand dressed in living green:\nSo to the Jews old Canaan stood,\nWhile Jordan rolled between.",
"But timorous mortals start and shrink\nTo cross this narrow sea,\nAnd linger shivering on the brink,\nAnd fear to launch away.",
"O could we make our doubts remove,\nThese gloomy doubts that rise,\nAnd see the Canaan that we love\nWith unbeclouded eyes!",
"Could we but climb where Moses stood,\nAnd view the landscape o'er,\nNot Jordan's stream, nor death's cold flood,\nShould fright us from the shore."]},
{t:"'Tis So Sweet to Trust in Jesus", a:"Louisa M. R. Stead, 1882", verses:[
"'Tis so sweet to trust in Jesus,\nAnd to take Him at His word;\nJust to rest upon His promise,\nAnd to know, \"Thus saith the Lord.\"\nJesus, Jesus, how I trust Him!\nHow I've proved Him o'er and o'er!\nJesus, Jesus, precious Jesus!\nO for grace to trust Him more!",
"O how sweet to trust in Jesus,\nJust to trust His cleansing blood;\nAnd in simple faith to plunge me\n'Neath the healing, cleansing flood!\nJesus, Jesus, how I trust Him!\nHow I've proved Him o'er and o'er!\nJesus, Jesus, precious Jesus!\nO for grace to trust Him more!",
"Yes, 'tis sweet to trust in Jesus,\nJust from sin and self to cease;\nJust from Jesus simply taking\nLife and rest, and joy and peace.\nJesus, Jesus, how I trust Him!\nHow I've proved Him o'er and o'er!\nJesus, Jesus, precious Jesus!\nO for grace to trust Him more!",
"I'm so glad I learned to trust Thee,\nPrecious Jesus, Savior, Friend;\nAnd I know that Thou art with me,\nWilt be with me to the end.\nJesus, Jesus, how I trust Him!\nHow I've proved Him o'er and o'er!\nJesus, Jesus, precious Jesus!\nO for grace to trust Him more!"]},
{t:"When Morning Gilds the Skies", a:"German Hymn, trans. Edward Caswall, 1854", verses:[
"When morning gilds the skies,\nMy heart awaking cries:\nMay Jesus Christ be praised!\nAlike at work and prayer,\nTo Jesus I repair:\nMay Jesus Christ be praised!",
"When sleep her balm denies,\nMy silent spirit sighs:\nMay Jesus Christ be praised!\nWhen evil thoughts molest,\nWith this I shield my breast:\nMay Jesus Christ be praised!",
"Does sadness fill my mind?\nA solace here I find:\nMay Jesus Christ be praised!\nOr fades my earthly bliss?\nMy comfort still is this:\nMay Jesus Christ be praised!",
"In heaven's eternal bliss\nThe loveliest strain is this:\nMay Jesus Christ be praised!\nLet earth, and sea, and sky\nFrom depth to height reply:\nMay Jesus Christ be praised!",
"Be this, while life is mine,\nMy canticle divine:\nMay Jesus Christ be praised!\nBe this the eternal song\nThrough all the ages on:\nMay Jesus Christ be praised!"]},
{t:"All People That on Earth Do Dwell", a:"William Kethe, 1561", verses:[
"All people that on earth do dwell,\nSing to the Lord with cheerful voice;\nHim serve with fear, His praise forthtell,\nCome ye before Him and rejoice.",
"The Lord, ye know, is God indeed;\nWithout our aid He did us make;\nWe are His folk, He doth us feed,\nAnd for His sheep He doth us take.",
"O enter then His gates with praise,\nApproach with joy His courts unto;\nPraise, laud, and bless His Name always,\nFor it is seemly so to do.",
"For why? The Lord our God is good,\nHis mercy is forever sure;\nHis truth at all times firmly stood,\nAnd shall from age to age endure.",
"To Father, Son, and Holy Ghost,\nThe God whom heaven and earth adore,\nFrom men and from the angel host\nBe praise and glory evermore."]},
{t:"Be Still, My Soul", a:"Catharina von Schlegel, 1752; trans. Jane Borthwick, 1855", verses:[
"Be still, my soul: the Lord is on thy side;\nBear patiently the cross of grief or pain;\nLeave to thy God to order and provide;\nIn every change He faithful will remain.\nBe still, my soul: thy best, thy heavenly Friend\nThrough thorny ways leads to a joyful end.",
"Be still, my soul: thy God doth undertake\nTo guide the future as He has the past.\nThy hope, thy confidence let nothing shake;\nAll now mysterious shall be bright at last.\nBe still, my soul: the waves and winds still know\nHis voice who ruled them while He dwelt below.",
"Be still, my soul: when dearest friends depart,\nAnd all is darkened in the vale of tears,\nThen shalt thou better know His love, His heart,\nWho comes to soothe thy sorrow and thy fears.\nBe still, my soul: thy Jesus can repay\nFrom His own fulness all He takes away.",
"Be still, my soul: the hour is hastening on\nWhen we shall be forever with the Lord,\nWhen disappointment, grief, and fear are gone,\nSorrow forgot, love's purest joys restored.\nBe still, my soul: when change and tears are past,\nAll safe and blessed we shall meet at last."]},
{t:"Breathe on Me, Breath of God", a:"Edwin Hatch, 1878", verses:[
"Breathe on me, Breath of God,\nFill me with life anew,\nThat I may love what Thou dost love,\nAnd do what Thou wouldst do.",
"Breathe on me, Breath of God,\nUntil my heart is pure,\nUntil with Thee I will one will,\nTo do and to endure.",
"Breathe on me, Breath of God,\nTill I am wholly Thine,\nTill all this earthly part of me\nGlows with Thy fire divine.",
"Breathe on me, Breath of God,\nSo shall I never die,\nBut live with Thee the perfect life\nOf Thine eternity."]},
{t:"Christ, Whose Glory Fills the Skies", a:"Charles Wesley, 1740", verses:[
"Christ, whose glory fills the skies,\nChrist, the true, the only Light,\nSun of Righteousness, arise,\nTriumph o'er the shades of night;\nDayspring from on high, be near;\nDaystar, in my heart appear.",
"Dark and cheerless is the morn\nUnaccompanied by Thee;\nJoyless is the day's return\nTill Thy mercy's beams I see;\nTill they inward light impart,\nGlad my eyes, and warm my heart.",
"Visit then this soul of mine,\nPierce the gloom of sin and grief;\nFill me, Radiancy Divine,\nScatter all my unbelief;\nMore and more Thyself display,\nShining to the perfect day."]},
{t:"Come, Christians, Join to Sing", a:"Christian H. Bateman, 1843", verses:[
"Come, Christians, join to sing\nAlleluia! Amen!\nLoud praise to Christ our King;\nAlleluia! Amen!\nLet all, with heart and voice,\nBefore His throne rejoice;\nPraise is His gracious choice:\nAlleluia! Amen!",
"Come, lift your hearts on high;\nAlleluia! Amen!\nLet praises fill the sky;\nAlleluia! Amen!\nHe is our Guide and Friend;\nTo us He'll condescend;\nHis love shall never end:\nAlleluia! Amen!",
"Praise yet our Christ again;\nAlleluia! Amen!\nLife shall not end the strain;\nAlleluia! Amen!\nOn heaven's blissful shore\nHis goodness we'll adore,\nSinging forevermore,\n\"Alleluia! Amen!\""]},
{t:"Day by Day", a:"Carolina Sandell Berg, 1865", verses:[
"Day by day, and with each passing moment,\nStrength I find to meet my trials here;\nTrusting in my Father's wise bestowment,\nI've no cause for worry or for fear.\nHe, whose heart is kind beyond all measure,\nGives unto each day what He deems best,\nLovingly its part of pain and pleasure,\nMingling toil with peace and rest.",
"Every day the Lord Himself is near me,\nWith a special mercy for each hour;\nAll my cares He fain would bear and cheer me,\nHe whose name is Counselor and Pow'r.\nThe protection of His child and treasure\nIs a charge that on Himself He laid;\n\"As thy days, thy strength shall be in measure,\"\nThis the pledge to me He made.",
"Help me then, in every tribulation,\nSo to trust Thy promises, O Lord,\nThat I lose not faith's sweet consolation,\nOffered me within Thy holy Word.\nHelp me, Lord, when toil and trouble meeting,\nE'er to take, as from a father's hand,\nOne by one, the days, the moments fleeting,\nTill with Christ the Lord I stand."]},
{t:"Awake, My Soul, and with the Sun", a:"Thomas Ken, 1695", verses:[
"Awake, my soul, and with the sun\nThy daily stage of duty run;\nShake off dull sloth, and joyful rise,\nTo pay thy morning sacrifice.",
"Thy precious time misspent, redeem,\nEach present day thy last esteem,\nImprove thy talent with due care;\nFor the great day thyself prepare.",
"By influence of the light divine\nLet thy own light to others shine;\nReflect all Heaven's propitious rays,\nIn ardent love and cheerful praise.",
"Praise God, from whom all blessings flow;\nPraise Him, all creatures here below;\nPraise Him above, ye heavenly host;\nPraise Father, Son, and Holy Ghost."]},
{t:"Face to Face with Christ, My Savior", a:"Carrie E. Breck, 1898", verses:[
"Face to face with Christ, my Savior,\nFace to face—what will it be,\nWhen with rapture I behold Him,\nJesus Christ who died for me?",
"Face to face I shall behold Him,\nFar beyond the starry sky;\nFace to face in all His glory,\nI shall see Him by and by!",
"Only faintly now I see Him,\nWith the darkened veil between,\nBut a blessed day is coming,\nWhen His glory shall be seen.",
"What rejoicing in His presence,\nWhen are banished grief and pain;\nWhen the crooked ways are straightened,\nAnd the dark things shall be plain.",
"Face to face—oh, blissful moment!\nFace to face—to see and know;\nFace to face with my Redeemer,\nJesus Christ who loves me so."]},
{t:"Great Is Thy Faithfulness", a:"Thomas O. Chisholm, 1923", verses:[
"Great is Thy faithfulness, O God my Father;\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not;\nAs Thou hast been, Thou forever wilt be.",
"Great is Thy faithfulness!\nGreat is Thy faithfulness!\nMorning by morning new mercies I see;\nAll I have needed Thy hand hath provided;\nGreat is Thy faithfulness, Lord, unto me!",
"Summer and winter and springtime and harvest,\nSun, moon and stars in their courses above\nJoin with all nature in manifold witness\nTo Thy great faithfulness, mercy and love.",
"Pardon for sin and a peace that endureth,\nThine own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!"]},
{t:"Have Thine Own Way, Lord", a:"Adelaide A. Pollard, 1902", verses:[
"Have Thine own way, Lord! Have Thine own way!\nThou art the Potter, I am the clay.\nMold me and make me after Thy will,\nWhile I am waiting, yielded and still.",
"Have Thine own way, Lord! Have Thine own way!\nSearch me and try me, Master, today!\nWhiter than snow, Lord, wash me just now,\nAs in Thy presence humbly I bow.",
"Have Thine own way, Lord! Have Thine own way!\nWounded and weary, help me, I pray!\nPower, all power, surely is Thine!\nTouch me and heal me, Savior divine.",
"Have Thine own way, Lord! Have Thine own way!\nHold o'er my being absolute sway!\nFill with Thy Spirit till all shall see\nChrist only, always, living in me."]},
{t:"He Leadeth Me: O Blessed Thought", a:"Joseph H. Gilmore, 1862", verses:[
"He leadeth me: O blessed thought!\nO words with heavenly comfort fraught!\nWhate'er I do, where'er I be,\nStill 'tis God's hand that leadeth me.",
"He leadeth me, He leadeth me;\nBy His own hand He leadeth me:\nHis faithful follower I would be,\nFor by His hand He leadeth me.",
"Sometimes 'mid scenes of deepest gloom,\nSometimes where Eden's bowers bloom,\nBy waters calm, o'er troubled sea,\nStill 'tis His hand that leadeth me.",
"Lord, I would clasp Thy hand in mine,\nNor ever murmur nor repine;\nContent, whatever lot I see,\nSince 'tis my God that leadeth me.",
"And when my task on earth is done,\nWhen, by Thy grace, the victory's won,\nE'en death's cold wave I will not flee,\nSince God through Jordan leadeth me."]},
{t:"I Am Thine, O Lord", a:"Fanny Crosby, 1875", verses:[
"I am Thine, O Lord, I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith\nAnd be closer drawn to Thee.",
"Draw me nearer, nearer, blessed Lord,\nTo the cross where Thou hast died;\nDraw me nearer, nearer, nearer, blessed Lord,\nTo Thy precious, bleeding side.",
"Consecrate me now to Thy service, Lord,\nBy the power of grace divine;\nLet my soul look up with a steadfast hope,\nAnd my will be lost in Thine.",
"O the pure delight of a single hour\nThat before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God,\nI commune as friend with friend!",
"There are depths of love that I cannot know\nTill I cross the narrow sea;\nThere are heights of joy that I may not reach\nTill I rest in peace with Thee."]},
{t:"I Love to Tell the Story", a:"A. Catherine Hankey, 1866", verses:[
"I love to tell the story of unseen things above,\nOf Jesus and His glory, of Jesus and His love.\nI love to tell the story, because I know 'tis true;\nIt satisfies my longings as nothing else can do.",
"I love to tell the story, 'twill be my theme in glory,\nTo tell the old, old story of Jesus and His love.",
"I love to tell the story; 'tis pleasant to repeat\nWhat seems, each time I tell it, more wonderfully sweet.\nI love to tell the story, for some have never heard\nThe message of salvation from God's own holy Word.",
"I love to tell the story, for those who know it best\nSeem hungering and thirsting to hear it like the rest.\nAnd when, in scenes of glory, I sing the new, new song,\n'Twill be the old, old story that I have loved so long."]},
{t:"I Surrender All", a:"Judson W. Van DeVenter, 1896", verses:[
"All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live.",
"I surrender all, I surrender all;\nAll to Thee, my blessed Savior,\nI surrender all.",
"All to Jesus I surrender,\nHumbly at His feet I bow;\nWorldly pleasures all forsaken,\nTake me, Jesus, take me now.",
"All to Jesus I surrender,\nMake me, Savior, wholly Thine;\nLet me feel the Holy Spirit,\nTruly know that Thou art mine.",
"All to Jesus I surrender,\nLord, I give myself to Thee;\nFill me with Thy love and power,\nLet Thy blessing fall on me."]},
{t:"In the Garden", a:"C. Austin Miles, 1912", verses:[
"I come to the garden alone,\nWhile the dew is still on the roses;\nAnd the voice I hear, falling on my ear,\nThe Son of God discloses.",
"And He walks with me, and He talks with me,\nAnd He tells me I am His own,\nAnd the joy we share as we tarry there,\nNone other has ever known.",
"He speaks, and the sound of His voice\nIs so sweet the birds hush their singing;\nAnd the melody that He gave to me\nWithin my heart is ringing.",
"I'd stay in the garden with Him\nThough the night around me be falling;\nBut He bids me go; through the voice of woe,\nHis voice to me is calling."]},
{t:"Jesus Paid It All", a:"Elvina M. Hall, 1865", verses:[
"I hear the Savior say,\n\"Thy strength indeed is small,\nChild of weakness, watch and pray,\nFind in Me thine all in all.\"",
"Jesus paid it all, all to Him I owe;\nSin had left a crimson stain,\nHe washed it white as snow.",
"Lord, now indeed I find\nThy power and Thine alone,\nCan change the leper's spots\nAnd melt the heart of stone.",
"For nothing good have I\nWhereby Thy grace to claim;\nI'll wash my garments white\nIn the blood of Calvary's Lamb.",
"And when, before the throne,\nI stand in Him complete,\n\"Jesus died my soul to save,\"\nMy lips shall still repeat."]},
{t:"Joyful, Joyful, We Adore Thee", a:"Henry van Dyke, 1907", verses:[
"Joyful, joyful, we adore Thee,\nGod of glory, Lord of love;\nHearts unfold like flowers before Thee,\nOpening to the sun above.\nMelt the clouds of sin and sadness;\nDrive the dark of doubt away;\nGiver of immortal gladness,\nFill us with the light of day!",
"All Thy works with joy surround Thee,\nEarth and heaven reflect Thy rays,\nStars and angels sing around Thee,\nCenter of unbroken praise.\nField and forest, vale and mountain,\nFlowery meadow, flashing sea,\nSinging bird and flowing fountain\nCall us to rejoice in Thee.",
"Thou art giving and forgiving,\nEver blessing, ever blest,\nWellspring of the joy of living,\nOcean depth of happy rest!\nThou our Father, Christ our Brother,\nAll who live in love are Thine;\nTeach us how to love each other,\nLift us to the joy divine.",
"Mortals, join the happy chorus,\nWhich the morning stars began;\nFather love is reigning o'er us,\nBrother love binds man to man.\nEver singing, march we onward,\nVictors in the midst of strife,\nJoyful music leads us sunward\nIn the triumph song of life."]},
{t:"Lead, Kindly Light", a:"John Henry Newman, 1833", verses:[
"Lead, kindly Light, amid the encircling gloom,\nLead Thou me on;\nThe night is dark, and I am far from home,\nLead Thou me on.\nKeep Thou my feet; I do not ask to see\nThe distant scene; one step enough for me.",
"I was not ever thus, nor prayed that Thou\nShouldst lead me on;\nI loved to choose and see my path, but now\nLead Thou me on.\nI loved the garish day, and, spite of fears,\nPride ruled my will: remember not past years.",
"So long Thy power hath blest me, sure it still\nWill lead me on,\nO'er moor and fen, o'er crag and torrent, till\nThe night is gone,\nAnd with the morn those angel faces smile,\nWhich I have loved long since, and lost awhile."]},
{t:"Let All Mortal Flesh Keep Silence", a:"Liturgy of St. James, trans. Gerard Moultrie, 1864", verses:[
"Let all mortal flesh keep silence,\nAnd with fear and trembling stand;\nPonder nothing earthly-minded,\nFor with blessing in His hand,\nChrist our God to earth descendeth,\nOur full homage to demand.",
"King of kings, yet born of Mary,\nAs of old on earth He stood,\nLord of lords, in human vesture,\nIn the body and the blood;\nHe will give to all the faithful\nHis own self for heavenly food.",
"Rank on rank the host of heaven\nSpreads its vanguard on the way,\nAs the Light of light descendeth\nFrom the realms of endless day,\nThat the powers of hell may vanish\nAs the darkness clears away.",
"At His feet the six-winged seraph,\nCherubim with sleepless eye,\nVeil their faces to the presence,\nAs with ceaseless voice they cry:\n\"Alleluia, Alleluia,\nAlleluia, Lord Most High!\""]},
{t:"My Jesus, I Love Thee", a:"William R. Featherston, 1864", verses:[
"My Jesus, I love Thee, I know Thou art mine;\nFor Thee all the follies of sin I resign.\nMy gracious Redeemer, my Savior art Thou;\nIf ever I loved Thee, my Jesus, 'tis now.",
"I love Thee because Thou has first loved me,\nAnd purchased my pardon on Calvary's tree.\nI love Thee for wearing the thorns on Thy brow;\nIf ever I loved Thee, my Jesus, 'tis now.",
"I'll love Thee in life, I will love Thee in death,\nAnd praise Thee as long as Thou lendest me breath;\nAnd say when the death dew lies cold on my brow,\nIf ever I loved Thee, my Jesus, 'tis now.",
"In mansions of glory and endless delight,\nI'll ever adore Thee in heaven so bright;\nI'll sing with the glittering crown on my brow,\nIf ever I loved Thee, my Jesus, 'tis now."]},
{t:"Near the Cross", a:"Fanny Crosby, 1869", verses:[
"Jesus, keep me near the cross,\nThere a precious fountain\nFree to all, a healing stream\nFlows from Calvary's mountain.",
"In the cross, in the cross,\nBe my glory ever;\nTill my raptured soul shall find\nRest beyond the river.",
"Near the cross, a trembling soul,\nLove and mercy found me;\nThere the bright and morning star\nSheds its beams around me.",
"Near the cross! O Lamb of God,\nBring its scenes before me;\nHelp me walk from day to day,\nWith its shadows o'er me.",
"Near the cross I'll watch and wait\nHoping, trusting ever,\nTill I reach the golden strand,\nJust beyond the river."]},
{t:"O the Deep, Deep Love of Jesus", a:"Samuel Trevor Francis, 1890", verses:[
"O the deep, deep love of Jesus,\nVast, unmeasured, boundless, free!\nRolling as a mighty ocean\nIn its fullness over me!\nUnderneath me, all around me,\nIs the current of Thy love\nLeading onward, leading homeward\nTo Thy glorious rest above!",
"O the deep, deep love of Jesus,\nSpread His praise from shore to shore!\nHow He loveth, ever loveth,\nChangeth never, nevermore!\nHow He watches o'er His loved ones,\nDied to call them all His own;\nHow for them He intercedeth,\nWatcheth o'er them from the throne!",
"O the deep, deep love of Jesus,\nLove of every love the best!\n'Tis an ocean vast of blessing,\n'Tis a haven sweet of rest!\nO the deep, deep love of Jesus,\n'Tis a heaven of heavens to me;\nAnd it lifts me up to glory,\nFor it lifts me up to Thee!"]},
{t:"Pass Me Not, O Gentle Savior", a:"Fanny Crosby, 1868", verses:[
"Pass me not, O gentle Savior,\nHear my humble cry;\nWhile on others Thou art calling,\nDo not pass me by.",
"Savior, Savior,\nHear my humble cry;\nWhile on others Thou art calling,\nDo not pass me by.",
"Let me at a throne of mercy\nFind a sweet relief;\nKneeling there in deep contrition,\nHelp my unbelief.",
"Trusting only in Thy merit,\nWould I seek Thy face;\nHeal my wounded, broken spirit,\nSave me by Thy grace.",
"Thou the Spring of all my comfort,\nMore than life to me,\nWhom have I on earth beside Thee?\nWhom in heaven but Thee?"]},
{t:"Revive Us Again", a:"William P. Mackay, 1863", verses:[
"We praise Thee, O God!\nFor the Son of Thy love,\nFor Jesus Who died,\nAnd is now gone above.",
"Hallelujah! Thine the glory.\nHallelujah! Amen.\nHallelujah! Thine the glory.\nRevive us again.",
"We praise Thee, O God!\nFor Thy Spirit of light,\nWho hath shown us our Savior,\nAnd scattered our night.",
"All glory and praise\nTo the Lamb that was slain,\nWho hath borne all our sins,\nAnd hath cleansed every stain.",
"Revive us again;\nFill each heart with Thy love;\nMay each soul be rekindled\nWith fire from above."]},
{t:"Savior, Like a Shepherd Lead Us", a:"Dorothy A. Thrupp, 1836", verses:[
"Savior, like a shepherd lead us,\nMuch we need Thy tender care;\nIn Thy pleasant pastures feed us,\nFor our use Thy folds prepare:\nBlessed Jesus, blessed Jesus,\nThou hast bought us, Thine we are;\nBlessed Jesus, blessed Jesus,\nThou hast bought us, Thine we are.",
"We are Thine; do Thou befriend us,\nBe the Guardian of our way;\nKeep Thy flock, from sin defend us,\nSeek us when we go astray:\nBlessed Jesus, blessed Jesus,\nHear, O hear us when we pray;\nBlessed Jesus, blessed Jesus,\nHear, O hear us when we pray.",
"Thou hast promised to receive us,\nPoor and sinful though we be;\nThou hast mercy to relieve us,\nGrace to cleanse, and power to free:\nBlessed Jesus, blessed Jesus,\nEarly let us turn to Thee;\nBlessed Jesus, blessed Jesus,\nEarly let us turn to Thee.",
"Early let us seek Thy favor,\nEarly let us do Thy will;\nBlessed Lord and only Savior,\nWith Thy love our bosoms fill:\nBlessed Jesus, blessed Jesus,\nThou hast loved us, love us still;\nBlessed Jesus, blessed Jesus,\nThou hast loved us, love us still."]},
{t:"Sun of My Soul, Thou Savior Dear", a:"John Keble, 1820", verses:[
"Sun of my soul, Thou Savior dear,\nIt is not night if Thou be near;\nO may no earthborn cloud arise\nTo hide Thee from Thy servant's eyes.",
"When the soft dews of kindly sleep\nMy wearied eyelids gently steep,\nBe my last thought, how sweet to rest\nForever on my Savior's breast.",
"Abide with me from morn till eve,\nFor without Thee I cannot live;\nAbide with me when night is nigh,\nFor without Thee I dare not die.",
"If some poor wandering child of Thine\nHave spurned today the voice divine,\nNow, Lord, the gracious work begin;\nLet him no more lie down in sin.",
"Watch by the sick; enrich the poor\nWith blessings from Thy boundless store;\nBe every mourner's sleep tonight,\nLike infant's slumbers, pure and light.",
"Come near and bless us when we wake,\nEre through the world our way we take,\nTill in the ocean of Thy love\nWe lose ourselves in heaven above."]},
{t:"The Old Rugged Cross", a:"George Bennard, 1913", verses:[
"On a hill far away stood an old rugged cross,\nThe emblem of suffering and shame;\nAnd I love that old cross where the dearest and best\nFor a world of lost sinners was slain.",
"So I'll cherish the old rugged cross,\nTill my trophies at last I lay down;\nI will cling to the old rugged cross,\nAnd exchange it some day for a crown.",
"O that old rugged cross, so despised by the world,\nHas a wondrous attraction for me;\nFor the dear Lamb of God left His glory above\nTo bear it to dark Calvary.",
"In the old rugged cross, stained with blood so divine,\nA wondrous beauty I see,\nFor 'twas on that old cross Jesus suffered and died,\nTo pardon and sanctify me.",
"To the old rugged cross I will ever be true,\nIts shame and reproach gladly bear;\nThen He'll call me some day to my home far away,\nWhere His glory forever I'll share."]},
{t:"To God Be the Glory", a:"Fanny Crosby, 1875", verses:[
"To God be the glory, great things He hath done,\nSo loved He the world that He gave us His Son,\nWho yielded His life an atonement for sin,\nAnd opened the life-gate that all may go in.",
"Praise the Lord, praise the Lord,\nLet the earth hear His voice!\nPraise the Lord, praise the Lord,\nLet the people rejoice!\nO come to the Father, through Jesus the Son,\nAnd give Him the glory, great things He hath done.",
"O perfect redemption, the purchase of blood,\nTo every believer the promise of God;\nThe vilest offender who truly believes,\nThat moment from Jesus a pardon receives.",
"Great things He hath taught us, great things He hath done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be\nOur wonder, our transport, when Jesus we see."]},
{t:"We Gather Together", a:"Dutch Hymn, 1597; trans. Theodore Baker, 1894", verses:[
"We gather together to ask the Lord's blessing;\nHe chastens and hastens His will to make known;\nThe wicked oppressing now cease from distressing,\nSing praises to His Name; He forgets not His own.",
"Beside us to guide us, our God with us joining,\nOrdaining, maintaining His kingdom divine;\nSo from the beginning the fight we were winning;\nThou, Lord, wast at our side; all glory be Thine!",
"We all do extol Thee, Thou Leader triumphant,\nAnd pray that Thou still our Defender wilt be.\nLet Thy congregation escape tribulation;\nThy Name be ever praised! O Lord, make us free!"]},
{t:"Ye Servants of God, Your Master Proclaim", a:"Charles Wesley, 1744", verses:[
"Ye servants of God, your Master proclaim,\nAnd publish abroad His wonderful Name;\nThe Name all-victorious of Jesus extol;\nHis kingdom is glorious, and rules over all.",
"God ruleth on high, almighty to save;\nAnd still He is nigh, His presence we have;\nThe great congregation His triumph shall sing,\nAscribing salvation to Jesus our King.",
"Salvation to God who sits on the throne!\nLet all cry aloud, and honor the Son;\nThe praises of Jesus the angels proclaim,\nFall down on their faces, and worship the Lamb.",
"Then let us adore, and give Him His right,\nAll glory and power, all wisdom and might,\nAll honor and blessing, with angels above,\nAnd thanks never-ceasing, and infinite love."]},
{t:"Count Your Blessings", a:"Johnson Oatman Jr., 1897", verses:[
"When upon life's billows you are tempest tossed,\nWhen you are discouraged, thinking all is lost,\nCount your many blessings, name them one by one,\nAnd it will surprise you what the Lord hath done."]},

{t:"Doxology", a:"Thomas Ken, 1674", verses:[
"Praise God, from whom all blessings flow;\nPraise Him, all creatures here below;\nPraise Him above, ye heavenly host;\nPraise Father, Son, and Holy Ghost."]},

{t:"Grace Greater than Our Sin", a:"Julia H. Johnston, 1910", verses:[
"Marvelous grace of our loving Lord,\nGrace that exceeds our sin and our guilt!\nYonder on Calvary's mount outpoured,\nThere where the blood of the Lamb was spilled."]},

{t:"He Hideth My Soul", a:"Fanny Crosby, 1890", verses:[
"A wonderful Savior is Jesus my Lord,\nA wonderful Savior to me;\nHe hideth my soul in the cleft of the rock,\nWhere rivers of pleasure I see."]},

{t:"Heavenly Sunlight", a:"Henry J. Zelley, 1899", verses:[
"Walking in sunlight, all of my journey;\nOver the mountains, through the deep vale;\nJesus has said, \"I'll never forsake thee,\"\nPromise divine that never can fail."]},

{t:"I Will Sing the Wondrous Story", a:"Francis H. Rowley, 1886", verses:[
"I will sing the wondrous story\nOf the Christ who died for me.\nHow He left His home in glory\nFor the cross of Calvary."]},

{t:"In the Sweet By and By", a:"S. Fillmore Bennett, 1868", verses:[
"There's a land that is fairer than day,\nAnd by faith we can see it afar;\nFor the Father waits over the way\nTo prepare us a dwelling place there."]},

{t:"Jesus Saves", a:"Priscilla J. Owens, 1882", verses:[
"We have heard the joyful sound:\nJesus saves! Jesus saves!\nSpread the tidings all around:\nJesus saves! Jesus saves!"]},

{t:"My Faith Looks Up to Thee", a:"Ray Palmer, 1830", verses:[
"My faith looks up to Thee,\nThou Lamb of Calvary,\nSavior divine!\nNow hear me while I pray,"]},

{t:"Nearer, Still Nearer", a:"Lelia N. Morris, 1898", verses:[
"Nearer, still nearer, close to Thy heart,\nDraw me, my Savior, so precious Thou art;\nFold me, O fold me close to Thy breast,\nShelter me safe in that haven of rest."]},

{t:"O Happy Day", a:"Philip Doddridge, 1755", verses:[
"O happy day, that fixed my choice\nOn Thee, my Savior and my God!\nWell may this glowing heart rejoice,\nAnd tell its raptures all abroad."]},

{t:"Redeemed, How I Love to Proclaim It", a:"Fanny Crosby, 1882", verses:[
"Redeemed, how I love to proclaim it!\nRedeemed by the blood of the Lamb;\nRedeemed through His infinite mercy,\nHis child and forever I am."]},

{t:"Savior, More Than Life to Me", a:"Fanny Crosby, 1875", verses:[
"Savior, more than life to me,\nI am clinging, clinging close to Thee;\nLet Thy precious blood applied,\nKeep me ever, ever near Thy side."]},

{t:"Send the Light", a:"Charles H. Gabriel, 1890", verses:[
"There's a call comes ringing o'er the restless wave,\nSend the light! Send the light!\nThere are souls to rescue, there are souls to save,\nSend the light! Send the light!"]},

{t:"Take Time to Be Holy", a:"William D. Longstaff, 1882", verses:[
"Take time to be holy, speak oft with thy Lord;\nAbide in Him always, and feed on His Word.\nMake friends of God's children, help those who are weak,\nForgetting in nothing His blessing to seek."]},

{t:"When the Roll Is Called Up Yonder", a:"James M. Black, 1893", verses:[
"When the trumpet of the Lord shall sound, and time shall be no more,\nAnd the morning breaks, eternal, bright and fair;\nWhen the saved of earth shall gather over on the other shore,\nAnd the roll is called up yonder, I'll be there."]},

{t:"Wonderful Words of Life", a:"Philip P. Bliss, 1874", verses:[
"Sing them over again to me,\nWonderful words of life,\nLet me more of their beauty see,\nWonderful words of life."]},

{t:"A Child of the King", a:"Harriet E. Buell, 1877", verses:[
"My Father is rich in houses and lands,\nHe holdeth the wealth of the world in His hands!\nOf rubies and diamonds, of silver and gold,\nHis coffers are full, He has riches untold."]},

{t:"Are You Washed in the Blood?", a:"Elisha A. Hoffman, 1878", verses:[
"Have you been to Jesus for the cleansing power?\nAre you washed in the blood of the Lamb?\nAre you fully trusting in His grace this hour?\nAre you washed in the blood of the Lamb?"]},

{t:"Down at the Cross", a:"Elisha A. Hoffman, 1878", verses:[
"Down at the cross where my Savior died,\nDown where for cleansing from sin I cried,\nThere to my heart was the blood applied;\nGlory to His Name!"]}
];
HYMNS.forEach((h,i)=>h.id=i);

/* ---------------------------- Toast ---------------------------- */
function toast(msg){
  const host=document.getElementById('toastHost');
  const el=document.createElement('div');
  el.className='toast';
  el.textContent=msg;
  host.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  setTimeout(()=>{el.classList.remove('show'); setTimeout(()=>el.remove(),250);},1800);
}

/* ---------------------------- Navigation ---------------------------- */
const pageTitles={home:"DV-BIBLE", hymns:"Hymns", notepad:"Notepad"};
function gotoPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.navbtn').forEach(b=>b.classList.toggle('active', b.dataset.page===name));
  document.getElementById('topbarTitle').textContent=pageTitles[name];
  if(name === 'notepad') renderNoteList('');
}
document.querySelectorAll('.navbtn').forEach(b=>b.addEventListener('click',()=>{ if(b.dataset.page) gotoPage(b.dataset.page); }));
document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>gotoPage(b.dataset.goto)));

/* ---------------------------- Sidebars ---------------------------- */
const leftSb=document.getElementById('leftSidebar'), rightSb=document.getElementById('rightSidebar');
const scrimL=document.getElementById('scrimLeft'), scrimR=document.getElementById('scrimRight');
function openLeft(){leftSb.classList.add('open'); scrimL.classList.add('show');}
function closeLeftFn(){leftSb.classList.remove('open'); scrimL.classList.remove('show');}
function openRight(){rightSb.classList.add('open'); scrimR.classList.add('show');}
function closeRightFn(){rightSb.classList.remove('open'); scrimR.classList.remove('show');}
document.getElementById('btnOpenLeft').addEventListener('click',openLeft);
document.getElementById('closeLeft').addEventListener('click',closeLeftFn);
scrimL.addEventListener('click',closeLeftFn);
document.getElementById('btnOpenRight').addEventListener('click',openRight);
document.getElementById('closeRight').addEventListener('click',closeRightFn);
scrimR.addEventListener('click',closeRightFn);

/* ---------------------------- Info Panels ---------------------------- */
const INFO_CONTENT={
"about-us":["About Us", `<div style="text-align:left; color:var(--text); line-height:1.6;">
    <p style="margin:0 0 12px;">DV Hymns App was built to put a <strong>complete, offline hymnal</strong> into the hands of every believer — in the sanctuary, on a mission field, or anywhere a signal can't reach.</p>
    <p style="margin:0 0 16px;">Our mission is simple: remove cost and connectivity as barriers to worship. We achieve this through three core pillars:</p>
    <ol style="margin:0 0 16px; padding-left:22px; color:var(--text);">
      <li style="margin-bottom:10px;"><strong>Faithful Preservation:</strong> Every hymn is drawn from the public domain and preserved exactly as written by the saints who came before us.</li>
      <li style="margin-bottom:10px;"><strong>Absolute Privacy:</strong> There are <strong>no ads, no logins, and no data collected</strong> — just Scripture-rooted song.</li>
      <li style="margin-bottom:0;"><strong>Ministry First:</strong> We maintain this application strictly as an act of ministry, not commerce.</li>
    </ol>
    <p style="margin:0;">Built for congregations, choirs, small groups, and quiet personal devotion alike, it is available the moment you need it.</p>
  </div>`],
"about-dev":["About Developer", `<div class="dev-profile">
    <div class="dev-cover"></div>
    <div class="dev-avatar-wrap">
      <div class="dev-ring">
        <svg class="dev-code-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </div>
      <!-- SWAP THE SRC BELOW WITH YOUR REAL PHOTO URL -->
      <img class="dev-avatar" src="https://via.placeholder.com/160" alt="DV Biblefirm">
    </div>
    <div class="dev-text">
      <h2 class="dev-name">DV Biblefirm</h2>
      <div class="dev-role">Lead Engineer & Minister</div>
      <div class="dev-bio">
        <p>Hymns App is designed, engineered, and maintained by DV as a single, self-contained application.</p>
        <div id="devBioMore" class="dev-bio-hidden">
          <p>Built with the conviction that tools for the church should be fast, private, and reliable even in low-connectivity settings.</p>
          <p>The entire app — its hymn library, notepad, and offline engine — lives in one file, with no external servers processing your data.</p>
        </div>
        <button class="show-more-btn" onclick="document.getElementById('devBioMore').style.display='block'; this.style.display='none';">Show more</button>
        <button class="dev-cta blue" onclick="window.open('#','_blank')">View Portfolio</button>
        <button class="dev-cta green" onclick="window.open('#','_blank')">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:22px;height:22px;"><path d="M17.47 13.5c-.18-.09-1.06-.52-1.23-.58-.16-.06-.28-.09-.4.09-.11.18-.46.58-.57.7-.1.11-.21.13-.39.04-.18-.09-.76-.28-1.44-.9-.53-.48-.89-1.07-1-1.25-.11-.18-.01-.28.08-.37.08-.08.18-.21.27-.32.09-.11.12-.18.18-.31.06-.12.03-.23-.01-.32-.05-.09-.4-1.02-.55-1.4-.15-.36-.29-.31-.4-.32h-.34c-.12 0-.31.05-.47.23-.16.18-.62.61-.62 1.48s.63 1.72.72 1.84c.09.12 1.25 1.96 3.03 2.73.43.18.76.29 1.02.37.43.14.81.12 1.12.07.34-.05 1.06-.43 1.21-.85.15-.41.15-.77.11-.84-.04-.07-.15-.11-.34-.2M12 20.32h-.03c-1.38 0-2.73-.37-3.92-1.08l-.28-.17-2.91.76.78-2.84-.18-.29A8.32 8.32 0 0 1 3.68 12c0-4.6 3.74-8.34 8.34-8.34 2.23 0 4.33.87 5.9 2.45A8.27 8.27 0 0 1 20.35 12c-.01 4.59-3.75 8.32-8.35 8.32m8.46-14.36A10.27 10.27 0 0 0 12 1.7 10.33 10.33 0 0 0 1.7 12c0 1.65.43 3.26 1.25 4.69L1 23l6.45-1.69A10.3 10.3 0 0 0 12 22.33c5.68 0 10.3-4.63 10.3-10.32 0-1.52-.59-2.94-1.66-4.01"/></svg>
          Follow WhatsApp Channel
        </button>
      </div>
    </div>
  </div>`],
  "proprietary":["Proprietary Software Notice", `<div style="text-align:left; color:var(--text); line-height:1.6;">
    <p style="margin:0 0 16px;"><span style="background:#FFEB3B; color:#000; padding:2px 4px; border-radius:4px;">This application, its architecture, and its source code are proprietary to DV.</span> Please observe the following terms:</p>
    <ol style="margin:0; padding-left:22px; color:var(--text);">
      <li style="margin-bottom:14px;"><strong>Usage Rights:</strong> Redistribution, rebranding, or resale of this application without written permission is not authorized.</li>
      <li style="margin-bottom:14px;"><strong>Public Domain Content:</strong> The hymn texts included in this library are in the public domain and are provided as a service to the body of Christ.</li>
      <li style="margin-bottom:14px;"><strong>Intellectual Property:</strong> The surrounding software — the notepad engine, offline framework, and interface — remains the intellectual property of DV.</li>
      <li style="margin-bottom:0;"><strong>Collaboration:</strong> If you'd like to license, extend, or collaborate on this application for your own ministry or organization, please reach out through the Contact Us section.</li>
    </ol>
  </div>`],
    "contact":["Contact Us", `<div style="text-align:left; color:var(--text); line-height:1.6;">
    <p style="margin:0 0 12px;">We'd love to hear from you — whether it's a bug report, a hymn you'd like to see added, a partnership inquiry, or simply encouragement.</p>
    <p style="margin:0 0 12px;">Reach the DV team through the app store listing where you installed Hymns App, or through your ministry's usual point of contact with DV.</p>
    <p style="margin:0 0 12px;">We read every message personally and aim to respond within a few business days. Feedback from real congregations and everyday users is what shapes every future update.</p>
    
    <div style="height:1px; background:var(--border); margin:24px 0;"></div>
    
    <div style="display:flex; justify-content:center; gap:16px; align-items:center;">
      <!-- Email (Red) -->
      <a href="mailto:#" style="display:flex; align-items:center; justify-content:center; width:52px; height:52px; border-radius:50%; background:#EA4335; color:#fff; text-decoration:none;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 4l10 8 10-8"/></svg>
      </a>
      <!-- Facebook (Blue) -->
      <a href="#" style="display:flex; align-items:center; justify-content:center; width:52px; height:52px; border-radius:50%; background:#1877F2; color:#fff; text-decoration:none;">
        <svg viewBox="0 0 24 24" fill="currentColor" style="width:26px;height:26px;"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
      </a>
      <!-- WhatsApp (Green) -->
      <a href="#" style="display:flex; align-items:center; justify-content:center; width:52px; height:52px; border-radius:50%; background:#25D366; color:#fff; text-decoration:none;">
        <svg viewBox="0 0 24 24" fill="currentColor" style="width:26px;height:26px;"><path d="M17.47 13.5c-.18-.09-1.06-.52-1.23-.58-.16-.06-.28-.09-.4.09-.11.18-.46.58-.57.7-.1.11-.21.13-.39.04-.18-.09-.76-.28-1.44-.9-.53-.48-.89-1.07-1-1.25-.11-.18-.01-.28.08-.37.08-.08.18-.21.27-.32.09-.11.12-.18.18-.31.06-.12.03-.23-.01-.32-.05-.09-.4-1.02-.55-1.4-.15-.36-.29-.31-.4-.32h-.34c-.12 0-.31.05-.47.23-.16.18-.62.61-.62 1.48s.63 1.72.72 1.84c.09.12 1.25 1.96 3.03 2.73.43.18.76.29 1.02.37.43.14.81.12 1.12.07.34-.05 1.06-.43 1.21-.85.15-.41.15-.77.11-.84-.04-.07-.15-.11-.34-.2M12 20.32h-.03c-1.38 0-2.73-.37-3.92-1.08l-.28-.17-2.91.76.78-2.84-.18-.29A8.32 8.32 0 0 1 3.68 12c0-4.6 3.74-8.34 8.34-8.34 2.23 0 4.33.87 5.9 2.45A8.27 8.27 0 0 1 20.35 12c-.01 4.59-3.75 8.32-8.35 8.32m8.46-14.36A10.27 10.27 0 0 0 12 1.7 10.33 10.33 0 0 0 1.7 12c0 1.65.43 3.26 1.25 4.69L1 23l6.45-1.69A10.3 10.3 0 0 0 12 22.33c5.68 0 10.3-4.63 10.3-10.32 0-1.52-.59-2.94-1.66-4.01"/></svg>
      </a>
      <!-- Phone (Cyan) -->
      <a href="tel:#" style="display:flex; align-items:center; justify-content:center; width:52px; height:52px; border-radius:50%; background:#2CA5E0; color:#fff; text-decoration:none;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>
  </div>`],
  "how-to":["How To Use", `<div style="text-align:left; color:var(--text); line-height:1.6;">
    <p style="margin:0 0 16px;">Getting started is simple. This application is engineered for complete offline reliability. Here is how to maximize your experience:</p>
    <ol style="margin:0; padding-left:22px; color:var(--text);">
      <li style="margin-bottom:14px;"><strong>Offline Hymn Library:</strong> Tap <em>Hymns</em> to browse or search by title. Use the Next/Previous buttons inside any hymn to navigate seamlessly.</li>
      <li style="margin-bottom:14px;"><strong>Complete KJV Bible:</strong> Tap <em>Bible</em> for an edge-to-edge reading experience, featuring full chapter search, verse highlighting, and instant offline access.</li>
      <li style="margin-bottom:14px;"><strong>Private Notepad:</strong> Draft sermon notes or prayer points. Your data is saved locally on your device for absolute privacy, never uploaded to external servers.</li>
      <li style="margin-bottom:14px;"><strong>Ministry To-Do List:</strong> Track sermon prep and ministry errands directly from the top-right settings menu.</li>
      <li style="margin-bottom:0;"><strong>Personalization:</strong> Tap the top-right menu to toggle Dark Mode, select custom accent themes, and adjust the global font size for comfortable reading.</li>
    </ol>
  </div>`]
};
document.querySelectorAll('#leftSidebar [data-panel]').forEach(item=>{
  item.addEventListener('click',()=>{
    const key=item.dataset.panel;
    const [title,body]=INFO_CONTENT[key];
    document.getElementById('infoTitle').textContent=title;
    const infoBody = document.getElementById('infoBody');
    infoBody.innerHTML = body;
    infoBody.style.padding = key === 'about-dev' ? '0' : '20px';
    document.getElementById('infoModal').classList.add('open');
    closeLeftFn();
  });
});
document.getElementById('closeInfo').addEventListener('click',()=>document.getElementById('infoModal').classList.remove('open'));

/* ---------------------------- Dark Mode ---------------------------- */
const darkToggle=document.getElementById('darkToggle');
function applyDark(on){
  document.documentElement.setAttribute('data-theme', on?'dark':'light');
  localStorage.setItem('dv_dark', on?'1':'0');
  darkToggle.checked=on;
}
applyDark(localStorage.getItem('dv_dark')==='1');
darkToggle.addEventListener('change',()=>{applyDark(darkToggle.checked); toast(darkToggle.checked?'Dark mode on':'Dark mode off');});

/* ---------------------------- Accent Themes ---------------------------- */
const ACCENTS=[
  {name:'Facebook Blue',hex:'#1877F2'},{name:'Crimson',hex:'#C0392B'},{name:'Royal Purple',hex:'#6C3AC9'},
  {name:'Forest',hex:'#2E8B57'},{name:'Amber',hex:'#D98A1F'},{name:'Teal',hex:'#0F9B8E'},
  {name:'Rose',hex:'#D6336C'},{name:'Indigo',hex:'#3B4FCC'},{name:'Slate',hex:'#5A6472'},{name:'Gold',hex:'#B8860B'}
];
const accentRow=document.getElementById('accentRow');
ACCENTS.forEach(ac=>{
  const dot=document.createElement('div');
  dot.className='accent-dot'; dot.style.background=ac.hex; dot.title=ac.name;
  dot.addEventListener('click',()=>setAccent(ac.hex));
  accentRow.appendChild(dot);
});
function setAccent(hex){
  document.documentElement.style.setProperty('--primary',hex);
  document.documentElement.style.setProperty('--primary-hover',hex);
  document.documentElement.style.setProperty('--primary-light',hex+'22');
  localStorage.setItem('dv_accent',hex);
  document.querySelectorAll('.accent-dot').forEach(d=>d.classList.toggle('active', d.style.background===hexToRgbStr(hex)));
}
function hexToRgbStr(hex){const c=document.createElement('div'); c.style.color=hex; document.body.appendChild(c); const rgb=getComputedStyle(c).color; c.remove(); return rgb;}
const savedAccent=localStorage.getItem('dv_accent');
if(savedAccent) setAccent(savedAccent); else setAccent('#1877F2');

/* ---------------------------- Font Scaling ---------------------------- */
const fontSlider=document.getElementById('fontSlider');
function applyFontScale(v){
  document.documentElement.style.setProperty('--font-scale',v);
  localStorage.setItem('dv_font_scale',v);
}
const savedScale=localStorage.getItem('dv_font_scale');
if(savedScale){fontSlider.value=savedScale; applyFontScale(savedScale);}
fontSlider.addEventListener('input',()=>applyFontScale(fontSlider.value));

/* ---------------------------- To-Do List ---------------------------- */
function getTodos(){return JSON.parse(localStorage.getItem('dv_todos')||'[]');}
function setTodos(list){localStorage.setItem('dv_todos', JSON.stringify(list));}
function renderTodos(){
  const list=getTodos();
  const el=document.getElementById('todoListEl');
  el.innerHTML='';
  if(!list.length){el.innerHTML='<div class="empty-state">No tasks yet.</div>'; return;}
  list.forEach((task,i)=>{
    const row=document.createElement('div'); row.className='list-row';
    row.innerHTML=`<div class="num" style="cursor:pointer;">${task.done?'✓':i+1}</div>
      <div class="meta"><div class="t" style="${task.done?'text-decoration:line-through;opacity:.55;':''}">${escapeHtml(task.text)}</div></div>`;
    row.querySelector('.num').addEventListener('click',()=>{task.done=!task.done; setTodos(list); renderTodos();});
    row.addEventListener('contextmenu',e=>e.preventDefault());
    row.addEventListener('dblclick',()=>{list.splice(i,1); setTodos(list); renderTodos(); toast('Task removed');});
    el.appendChild(row);
  });
}
document.querySelector('[data-panel="todo"]').addEventListener('click',()=>{document.getElementById('todoModal').classList.add('open'); renderTodos(); closeRightFn();});
document.getElementById('closeTodo').addEventListener('click',()=>document.getElementById('todoModal').classList.remove('open'));
function addTodo() {
  const input = document.getElementById('todoInput');
  const val = input.value.trim();
  if (val) {
    const list = getTodos(); 
    list.push({text: val, done: false}); 
    setTodos(list);
    input.value = ''; 
    renderTodos(); 
    toast('Task added');
  }
}
document.getElementById('todoInput').addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });
document.getElementById('todoAddBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });
document.getElementById('todoAddBtn').addEventListener('click', addTodo);
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}

/* ---------------------------- Install / Share App ---------------------------- */
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault(); deferredPrompt=e;});
document.getElementById('btnInstall').addEventListener('click',async()=>{
  if(deferredPrompt){deferredPrompt.prompt(); const r=await deferredPrompt.userChoice; deferredPrompt=null; toast(r.outcome==='accepted'?'App installed':'Install canceled');}
  else toast('Use your browser menu to Add to Home screen');
  closeRightFn();
});
document.getElementById('btnShareApp').addEventListener('click',async()=>{
  const shareData={title:'Hymns App',text:'Check out this offline hymnal app.',url:location.href};
  if(navigator.share){try{await navigator.share(shareData); toast('Shared');}catch(e){}}
  else{navigator.clipboard && navigator.clipboard.writeText(location.href); toast('Link copied');}
  closeRightFn();
});

/* ---------------------------- Hymns Page ---------------------------- */
let currentHymnIndex=0;
function renderHymnList(filter){
  const el=document.getElementById('hymnList');
  el.innerHTML='';
  const q=(filter||'').toLowerCase();
  const filtered=HYMNS.filter(h=> !q || h.t.toLowerCase().includes(q) || h.verses[0].toLowerCase().includes(q));
  if(!filtered.length){el.innerHTML='<div class="empty-state">No hymns match your search.</div>'; return;}
  filtered.forEach(h=>{
    const row=document.createElement('div'); row.className='list-row';
    row.innerHTML=`<div class="num">${h.id+1}</div><div class="meta"><div class="t">${escapeHtml(h.t)}</div><div class="s">${escapeHtml(h.a)}</div></div>`;
    row.addEventListener('click',()=>openHymn(h.id));
    el.appendChild(row);
  });
}
function openHymn(id){
  currentHymnIndex=id;
  const h=HYMNS[id];
  document.getElementById('page-hymns').innerHTML=hymnReaderHtml(h);
  bindHymnReader();
  addRecent(h);
}
function hymnReaderHtml(h){
  const versesHtml=h.verses.map((v,i)=>`<div class="verse"><div class="verse-label">Verse ${i+1}</div>${escapeHtml(v)}</div>`).join('');
  return `<div class="hymn-reader">
    <button class="icon-btn" id="backToList" style="margin-left:-8px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
    <h2>${escapeHtml(h.t)}</h2>
    <div class="hymn-meta">${escapeHtml(h.a)}</div>
    ${versesHtml}
  </div>
  <div class="hymn-nav">
    <button id="prevHymn" ${h.id===0?'disabled':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>Previous</button>
    <button id="nextHymn" ${h.id===HYMNS.length-1?'disabled':''}>Next<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>
  </div>`;
}
function bindHymnReader(){
  document.getElementById('backToList').addEventListener('click',renderHymnsPageDefault);
  const prev=document.getElementById('prevHymn'), next=document.getElementById('nextHymn');
  if(prev) prev.addEventListener('click',()=>openHymn(currentHymnIndex-1));
  if(next) next.addEventListener('click',()=>openHymn(currentHymnIndex+1));
}
function renderHymnsPageDefault(){
  document.getElementById('page-hymns').innerHTML=`
    <div class="search-bar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
      <input id="hymnSearch" type="text" placeholder="Search hymns or first lines">
    </div>
    <div id="hymnList"></div>`;
  document.getElementById('hymnSearch').addEventListener('input',e=>renderHymnList(e.target.value));
  renderHymnList('');
}
document.getElementById('hymnSearch').addEventListener('input',e=>renderHymnList(e.target.value));
renderHymnList('');
document.getElementById('qaRandom').addEventListener('click',()=>{gotoPage('hymns'); openHymn(Math.floor(Math.random()*HYMNS.length));});

/* Recently viewed on Home */
function getRecents(){return JSON.parse(localStorage.getItem('dv_recents')||'[]');}
function addRecent(h){
  let list=getRecents().filter(r=>r.id!==h.id);
  list.unshift({id:h.id,t:h.t,a:h.a});
  list=list.slice(0,6);
  localStorage.setItem('dv_recents',JSON.stringify(list));
  renderRecents();
}
function renderRecents(){
  const el=document.getElementById('recentList');
  const list=getRecents();
  if(!list.length){el.innerHTML='<div class="empty-state">Hymns you open will appear here.</div>'; return;}
  el.innerHTML='';
  list.forEach(r=>{
    const row=document.createElement('div'); row.className='list-row';
    row.innerHTML=`<div class="num">${r.id+1}</div><div class="meta"><div class="t">${escapeHtml(r.t)}</div><div class="s">${escapeHtml(r.a)}</div></div>`;
    row.addEventListener('click',()=>{gotoPage('hymns'); openHymn(r.id);});
    el.appendChild(row);
  });
}
renderRecents();
/* =========================================================================
   NOTEPAD — IndexedDB persistence
   ========================================================================= */
let dvDBPromise = null;
function openDB() {
  if (dvDBPromise) return dvDBPromise;
  dvDBPromise = new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('indexedDB unavailable'));
    const req = indexedDB.open('dv_hymns_notes_db', 2);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('notes')) {
        const store = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
        store.createIndex('updatedAt', 'updatedAt');
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => { dvDBPromise = null; reject(req.error); };
  });
  return dvDBPromise;
}

async function dbAll() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('notes', 'readonly');
    const req = tx.objectStore('notes').getAll();
    req.onsuccess = () => resolve(req.result.sort((a, b) => b.updatedAt - a.updatedAt));
    req.onerror = () => reject(req.error);
  });
}

async function dbPut(note) {
  const db = await openDB();
  if (note.id == null) delete note.id;
  
  return new Promise((resolve, reject) => {
    const tx = db.transaction('notes', 'readwrite');
    const req = note.id ? tx.objectStore('notes').put(note) : tx.objectStore('notes').add(note);
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('notes', 'readwrite');
    tx.objectStore('notes').delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

let currentNoteId=null;
async function renderNoteList(filter){
  const el=document.getElementById('noteList');
  const all=await dbAll();
  const q=(filter||'').toLowerCase();
  const list=all.filter(n=> !q || (n.title||'').toLowerCase().includes(q) || (n.plain||'').toLowerCase().includes(q));
  el.innerHTML='';
  if(!list.length){el.innerHTML='<div class="empty-state">No saved notes yet. Tap + to start one.</div>'; return;}
  list.forEach(n=>{
    const row=document.createElement('div'); row.className='list-row note-list-item';
    const d=new Date(n.updatedAt);
    row.innerHTML=`<div class="num">${n.favorite?'★':'N'}</div>
      <div class="meta"><div class="t">${escapeHtml(n.title||'Untitled')}</div><div class="s">${d.toLocaleDateString()} ${d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div></div>
      <button class="icon-btn dot-menu-btn" aria-label="More"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg></button>`;
    row.querySelector('.meta').addEventListener('click',()=>openNoteEditor(n.id));
    row.querySelector('.dot-menu-btn').addEventListener('click',(e)=>{e.stopPropagation(); openDropdown(e.currentTarget, n.id);});
    el.appendChild(row);
  });
}
document.getElementById('noteSearch').addEventListener('input',e=>renderNoteList(e.target.value));
renderNoteList('');

/* FAB */
const fabAdd=document.getElementById('fabAdd'), fabMenu=document.getElementById('fabMenu');
fabAdd.addEventListener('click',()=>fabMenu.classList.toggle('show'));
document.getElementById('fabStartNote').addEventListener('click',()=>{fabMenu.classList.remove('show'); openNoteEditor(null);});
document.getElementById('fabTemplate').addEventListener('click',()=>{
  fabMenu.classList.remove('show');
  openNoteEditor(null);
  document.getElementById('noteEditor').innerHTML='<p><strong>Sermon Title:</strong></p><p><strong>Scripture Reference:</strong></p><p><strong>Key Points:</strong></p><p>1. </p><p>2. </p><p>3. </p><p><strong>Personal Reflection:</strong></p>';
});
document.addEventListener('click',(e)=>{
  if(!fabMenu.contains(e.target) && !e.target.closest('#fabAdd')) fabMenu.classList.remove('show');
});
document.getElementById('qaNewNote').addEventListener('click',()=>{gotoPage('notepad'); openNoteEditor(null);});

/* Editor */
const editorModal=document.getElementById('editorModal');
const noteEditor=document.getElementById('noteEditor');

function openNoteEditor(id){
  currentNoteId=id;
  noteEditor.innerHTML='';
  noteEditor.style.fontSize='26px';
  editorModal.classList.add('open');
  if(id!=null){
    dbAll().then(all=>{
      const n=all.find(x=>x.id===id);
      if(n) noteEditor.innerHTML=n.content||'';
    });
  }
  setTimeout(()=>noteEditor.focus(),150);
}

document.getElementById('closeEditor').addEventListener('click',()=>{editorModal.classList.remove('open'); renderNoteList('');});
document.querySelectorAll('.tb-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const cmd=btn.dataset.cmd;
    if(cmd==='undo') document.execCommand('undo');
    else if(cmd==='redo') document.execCommand('redo');
    else if(cmd==='copy'){navigator.clipboard.writeText(noteEditor.innerText).then(()=>toast('Copied')).catch(()=>{});}
    else if(cmd==='paste'){navigator.clipboard.readText().then(t=>document.execCommand('insertText',false,t)).catch(()=>toast('Paste not permitted'));}
    else if(cmd==='delete'){noteEditor.innerHTML=''; noteEditor.focus();}
  });
});

/* Save flow */
const saveOverlay=document.getElementById('saveOverlay');
document.getElementById('editorSaveBtn').addEventListener('click',()=>{
  document.getElementById('saveTitleInput').value='';
  saveOverlay.classList.add('show');
  setTimeout(()=>document.getElementById('saveTitleInput').focus(),100);
});
document.getElementById('saveCancelBtn').addEventListener('click',()=>saveOverlay.classList.remove('show'));
document.getElementById('saveTitleInput').addEventListener('keydown',e=>{
  if(e.key==='Enter'){ e.preventDefault(); document.getElementById('saveConfirmBtn').click(); }
});
document.getElementById('saveConfirmBtn').addEventListener('click',async()=>{
  const title=document.getElementById('saveTitleInput').value.trim()||'Untitled';
  const note={id:currentNoteId||undefined, title, content:noteEditor.innerHTML, plain:noteEditor.textContent, updatedAt:Date.now()};
  try{
    const id=await dbPut(note);
    currentNoteId=note.id||id;
    toast('Note saved');
  }catch(err){
    toast('Save failed — please try again');
  }
  saveOverlay.classList.remove('show');
  editorModal.classList.remove('open');
  renderNoteList('');
});

/* Delete flow */
const deleteOverlay=document.getElementById('deleteOverlay');
let pendingDeleteId=null;
document.getElementById('deleteCancelBtn').addEventListener('click',()=>deleteOverlay.classList.remove('show'));
document.getElementById('deleteConfirmBtn').addEventListener('click',async()=>{
  if(pendingDeleteId!=null){await dbDelete(pendingDeleteId); toast('Note deleted'); renderNoteList('');}
  deleteOverlay.classList.remove('show');
});

/* Rename flow */
const renameOverlay=document.getElementById('renameOverlay');
let pendingRenameId=null;
document.getElementById('renameCancelBtn').addEventListener('click',()=>renameOverlay.classList.remove('show'));
document.getElementById('renameTitleInput').addEventListener('keydown',e=>{
  if(e.key==='Enter'){ e.preventDefault(); document.getElementById('renameConfirmBtn').click(); }
});
document.getElementById('renameConfirmBtn').addEventListener('click',async()=>{
  const newTitle=document.getElementById('renameTitleInput').value.trim();
  if(newTitle && pendingRenameId!=null){
    const all=await dbAll(); const n=all.find(x=>x.id===pendingRenameId);
    if(n){ n.title=newTitle; n.updatedAt=Date.now(); await dbPut(n); toast('Renamed'); renderNoteList(''); }
  }
  renameOverlay.classList.remove('show');
});

/* Three-dot dropdown */
const dropdown=document.getElementById('noteDropdown');
let dropdownNoteId=null;
function openDropdown(anchor, noteId){
  dropdownNoteId=noteId;
  const rect=anchor.getBoundingClientRect();
  dropdown.style.top=Math.min(rect.bottom+4, window.innerHeight-220)+'px';
  dropdown.style.right=(window.innerWidth-rect.right)+'px';
  dropdown.style.left='auto';
  dropdown.classList.add('show');
}
document.addEventListener('click',(e)=>{
  if(!dropdown.contains(e.target) && !e.target.closest('.dot-menu-btn')) dropdown.classList.remove('show');
});
dropdown.querySelectorAll('.item').forEach(item=>{
  item.addEventListener('click',async()=>{
    const act=item.dataset.act;
    dropdown.classList.remove('show');
    if(act==='open'){openNoteEditor(dropdownNoteId);}
    else if(act==='rename'){
      pendingRenameId=dropdownNoteId;
      const all=await dbAll(); const n=all.find(x=>x.id===dropdownNoteId);
      document.getElementById('renameTitleInput').value = n ? n.title : '';
      renameOverlay.classList.add('show');
      setTimeout(()=>document.getElementById('renameTitleInput').focus(),100);
    }
    else if(act==='share'){
      const all=await dbAll(); const n=all.find(x=>x.id===dropdownNoteId);
      if(n && navigator.share){navigator.share({title:n.title,text:n.plain}).catch(()=>{});}
      else if(n){navigator.clipboard && navigator.clipboard.writeText(n.plain); toast('Copied to clipboard');}
    }
    else if(act==='delete'){pendingDeleteId=dropdownNoteId; deleteOverlay.classList.add('show');}
    else if(act==='exit'){/* just close */}
  });
});

/* STANDARD EXTERNAL SERVICE WORKER & STORAGE PERSISTENCE */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().catch(() => {});
}
