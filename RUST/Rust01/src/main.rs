use std::vec;

fn main() {
    let mut array: [i32; 6] = [1, 5, 6, 7, 4, 3];

    loop {
        let mut swapped: bool = false;

        for i in 0..array.len() - 1 {
            if array[i] > array[i + 1] {
                array.swap(i, i + 1);
                swapped = true;
            }
        }

        if !swapped {
            break;
        }
    }

    println!("Sorted array ascending: {:?}", array);

    let mut array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let mut swap = true;
    while swap {
        swap = false;
        for i in 0..array2.len() - 1 {
            if array2[i] < array2[i + 1] {
                array2.swap(i, i + 1);
                swap = true;
            }
        }
    }

    println!("Sorted array2 descending: {:?}", array2);

    let tuple3 = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let mut vec = vec![
        tuple3.0, tuple3.1, tuple3.2, tuple3.3, tuple3.4, tuple3.5, tuple3.6, tuple3.7, tuple3.8,
        tuple3.9,
    ];
    let mut swap2 = true;

    while swap2 {
        swap2 = false;
        for i in 0..vec.len() - 1 {
            if vec[i] < vec[i + 1] {
                vec.swap(i, i + 1);
                swap2 = true;
            }
        }
    }

    println!("Sorted tuple3 descending: {:?}", vec);
    struct Stats {
        hp: i32,
        mp: i32,
        attack: i32,
        defense: i32,
        speed: i32,
        magic: i32,
        luck: i32,
        crit: i32,
        evasion: i32,
        accuracy: i32,
        level: i32,
        exp: i32,
        gold: i32,
        items: Vec<String>,
    }

    let player_stats01: Stats = Stats {
        hp: 100,
        mp: 50,
        attack: 20,
        defense: 15,
        speed: 10,
        magic: 5,
        luck: 3,
        crit: 2,
        evasion: 1,
        accuracy: 95,
        level: 1,
        exp: 0,
        gold: 100,
        items: vec!["Potion".to_string(), "Elixir".to_string()],
    };

    struct Player {
        name: String,
        status: Stats,
        inventory: Vec<String>,
        equipment: Vec<String>,
    }

    let player01 = Player {
        name: "Player01".to_string(),
        status: player_stats01,
        inventory: vec!["Potion".to_string(), "Elixir".to_string()],
        equipment: vec!["Sword".to_string(), "Shield".to_string()],
    };

    fn display_stats(player: &Player) {
        println!("Player Name: {}", player.name);
        println!("Player HP: {}", player.status.hp);
        println!("Player MP: {}", player.status.mp);
        println!("Player Attack: {}", player.status.attack);
        println!("Player Defense: {}", player.status.defense);
        println!("Player Speed: {}", player.status.speed);
        println!("Player Magic: {}", player.status.magic);
        println!("Player Luck: {}", player.status.luck);
        println!("Player Crit: {}", player.status.crit);
        println!("Player Evasion: {}", player.status.evasion);
        println!("Player Accuracy: {}", player.status.accuracy);
        println!("Player Level: {}", player.status.level);
        println!("Player EXP: {}", player.status.exp);
        println!("Player Gold: {}", player.status.gold);
        println!("Player Inventory: {:?}", player.inventory);
        println!("Player Equipment: {:?}", player.equipment);
        println!("Player Items: {:?}", player.status.items);
    }

    loop {
        println!("Welcome to the game!");
        println!("Enter a command (help for command list, exit to quit):");
        let mut command = String::new();
        std::io::stdin()
            .read_line(&mut command)
            .expect("Failed to read line");
        let command = command.trim();

        if command == "exit" {
            break;
        } else if command == "help" {
            println!("############--HELP--##############");
            println!("Available commands: stats, inventory, equipment, items, exit");
            println!("Actions: attack, defend, use item, equip, unequip");
            println!("##########################");
        } else if command == "attack" {
            println!("Attacking...");
            // Implement attack logic here
        } else if command == "defend" {
            println!("Defending...");
            // Implement defend logic here
        } else if command == "use item" {
            println!("Using item...");
            // Implement use item logic here
        } else if command == "equip" {
            println!("Equipping item...");
            // Implement equip logic here
        } else if command == "unequip" {
            println!("Unequipping item...");
            // Implement unequip logic here
        } else if command == "stats" {
            display_stats(&player01);
        } else if command == "inventory" {
            println!("Inventory: {:?}", player01.inventory);
        } else if command == "equipment" {
            println!("Equipment: {:?}", player01.equipment);
        } else if command == "items" {
            println!("Items: {:?}", player01.status.items);
        } else {
            println!("Unknown command: {}", command);
        }
    }
    println!("Exiting the game...");
}
