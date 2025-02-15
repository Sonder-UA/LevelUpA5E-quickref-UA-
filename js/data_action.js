data_action = [
    {
        title: "Атака",
        icon: "crossed-swords",
        subtitle: "Ближній або дальній бій",
        description: "Зробіть атаку ближнім або дальнім боєм за допомогою вашої зброї",
        reference: "Посібник пригодника, с. 443-447.",
        bullets: [
            "Деякі особливості, такі як <i>Додаткова атака</i> бійця, дозволяють здійснити кілька атак цією дією. Кожна з цих атак є окремим кидком і може бути націлена на різних істот. Ви можете рухатись між атаками.",
            "Коли ви атакуєте зброєю, що не має властивості важкої і використовується однією рукою, ви можете використовувати бонусну дію для атаки іншою зброєю в іншій руці (див. бонусну дію <i>Атака іншою рукою</i>).",
            "Ви можете замінити одну зі своїх атак ближнім боєм на <i>Основний маневр</i>.",
            "Деякі стани дають перевагу в атаці: атаки проти осліплених, паралізованих, окам'янілих, скутих, паралізованих чи непритомних цілей; ближні атаки проти лежачих цілей; атаки невидимими чи схованими нападаючими.",
            "Деякі стани дають недолік на атаку: атаки проти невидимих чи схованих цілей; дальні атаки проти лежачих цілей; атаки осліпленими, наляканими, отруєними або скутиими нападниками."
        ]
    },
    {
        title: "Основні маневри",
        icon: "crossed-swords",
        subtitle: "Основні маневри в ближньому бою",
        description: "Виконайте основний бойовий маневр",
        reference: "Посібник пригодника, с. 458-459.",
        bullets: [
            "Коли ви успішно використовуєте основний маневр, ви також завдаєте основного ближнього пошкодження. Це рівно 1 + ваш модифікатор Сили.",
            "Ви не можете використовувати основний маневр для активації будь-яких особливостей, що завдають додаткової шкоди (як, наприклад, Атака з підступу або Божественний Удар), якщо тільки це не зазначено в описі особливості.",
            "Маневр іноді змушує ціль зробити рятувальний кидок для протидії його ефектам. DC рятувального кидка розраховується наступним чином: Маневр DC = 8 + ваш бонус до майстерності + ваш модифікатор Сили або Ловкості. Бойові маневри не є магічними."
        ]
    },
    {
        title: "Роззброєння",
        icon: "drop-weapon",
        subtitle: "Основний бойовий маневр",
        description: "Спробуйте вибити предмет або зброю з руки істоти",
        reference: "Посібник пригодника, с. 458",
        bullets: [
            "Ціль повинна бути в межах вашого досяжності та тримати предмет (неважливо, носить чи використовує)",
            "Ціль робить рятувальний кидок Сили або Ловкості проти вашого DC маневру.",
            "При невдачі, ви завдаєте основного ближнього пошкодження і ціль скидає предмет на своєму місці.",
            "Ціль має перевагу, якщо вона більша за вас або тримає предмет двома або більше руками, і ціль, що менша за вас, має недолік."
        ]
    },
    {
        title: "Захопити",
        icon: "mountain-climbing",
        subtitle: "Основний бойовий маневр",
        description: "Спробуйте захопити істоту",
        reference: "Посібник пригодника, с. 458",
        bullets: [
            "Спробуйте захопити істоту, яка в два чи більше разів більша за вас, і залізти або стрибнути на її спину.",
            "Зробіть рятувальний кидок Сили або Ловкості проти DC маневру істоти, щоб вчепитися або утримувати баланс на її тілі.",
            "У разі успіху, ви потрапляєте в простір істоти та можете рухатись по її тілу, як по важкій місцевості.",
            "Поки ви тримаєтесь за більшу істоту, ви маєте перевагу на атаки проти неї.",
            "Істота також може використовувати свою дію або замінити одну з атак на своєму ході, щоб спробувати скинути вас, наприклад, струсивши вас або вдаривши об стіну, змушуючи вас робити рятувальний кидок Сили або Ловкості проти її DC маневру або впасти на землю в найближчому просторі біля істоти, отримуючи основне ближнє пошкодження в процесі.",
            "Якщо істота вибирає перевернутися, щоб скинути вас, вона стає лежачою, але ви маєте недолік на рятувальний кидок, щоб утриматися."
    },
    {
        title: "Knockdown",
        icon: "tripwire",
        subtitle: "Basic Combat Maneuver",
        description: "Trip or push a creature down",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "The target makes a Strength saving throw against your maneuver DC.",
            "On a failure, you deal basic melee damage and knock the target prone."
        ]
    },
    {
        title: "Overrun",
        icon: "bulldozer",
        subtitle: "Basic Combat Maneuver",
        description: "Use an action or Bonus action to move through a creature's space",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "Make a Strength saving throw against the target's maneuver DC.",
            "On a success, you deal basic melee damage and can move through the hostile creature's space once this turn.",
            "You have advantage if you are larger than the target, or disadvantage if you are smaller.",
            " If you are two or more sizes smaller than the target, you can move through the hostile creature's space without making a save.",
            "You still provoke opportunity attacks if you move beyond a creature's reach."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Basic Combat Maneuver",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "Adventurer's Guide, pg. 459",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "The target makes a Strength saving throw against your maneuver DC.",
            "On a failure, you deal basic melee damage and push the target a number of feet away from you equal to 5 + 5 for every 5 points it failed its saving throw by. You can move the creature in any direction away from you (to the side, forward, or diagonally away).",
            "A creature that is shoved off of a precipice is propelled off of whatever it is standing on—it does not receive any saving throw or ability check to grab onto something to avoid falling down below."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "Adventurer's Guide, pg. 442, 491.",
        bullets: [
            "You can't cast a spell with your action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "Movement does not provoke opportunity attacks for the rest of the turn."
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "Adventurer's Guide, pg. 442",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "Sneaky Sneaky",
        description: "Attempt to hide",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Sprint",
        icon: "sprint",
        subtitle: "Up to 4x speed",
        description: "Run up to quadruple your speed",
        reference: "Adventurer's Guide, pg. 443",
        bullets: [
            "You may not take any other actions, bonus actions or reactions other than your move speed for the turn.",
            "If you are unencumbered, your Speed is quadrupled for one turn. If you are encumbered or wearing heavy armor, your Speed is tripled for one turn.",
            "You must Sprint in a straight line each turn, although you can change direction each time you Sprint.",
            "You may Sprint for a number of turns equal to your Constitution modifier.",
            "Each turn you Sprint after that, you make a Constitution (Athletics) check (DC 10 + 1 per previous check made in the last minute) or you suffer a level of fatigue.",
            "You recover fatigue suffered from sprinting one minute after you stop sprinting."
        ]
    },
    {
        title: "Tumble",
        icon: "rolling-energy",
        subtitle: "Tumble past an enemy",
        description: "Move through an enemy's space",
        reference: "Adventurer's Guide, pg. 444",
        bullets: [
            "You can use an Action or Bonus Action to Tumble through a hostile creature's space",
            "Make a Dexterity saving throw against the Target's combat maneuver DC.",
            "On a success, you can move through the hostile creature's space once this turn.",
            "If you have proficiency in Acrobatics, you gain an expertise die on the save (or you gain a 1d6 expertise die if you also have the tumbling specialty).",
            "If you are smaller than the target, you have advantage. If you are two or more sizes larger, you can move through uncontested.",
            "You still provoke Opportunity attacks if you move beyond a creature's reach"
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "Adventurer's Guide, pg. 444",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use (like administering or drinking a potion), you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "Adventurer's Guide, pg. 320",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "Adventurer's Guide, pg. 449.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "Adventurer's Guide, pg. 442.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
