public class LinearSearchExample {

    public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                return i; // return the index where the element is found
            }
        }
        return -1; // return -1 if the element is not found
    }

public static void main(String[] args) {
    int[] data = {10, 25, 30, 45, 50};
    int key = 30;

    int result = linearSearch(data, key);

    if (result != -1) {
        System.out.println("Element found at index: " + result);
    } else {
        System.out.println("Element not found.");
    }
}
}