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

    println!("Sorted array: {:?}", array);
}
