
fn main(){
    let mut s = String::new();
    let mut i = 0;
    while i < 10 {
        s.push_str("Hello, world!\n");
        i += 1;
    }
    println!("{}", s);
    let mut s = String::new();
    let stdin = std::io::stdin();
    println!("Please enter a string:");
    stdin.read_line(&mut s).expect("Failed to read line");
    println!("You entered: {}", s);
}