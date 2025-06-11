import java.util.ArrayList;
import java.util.List;
 class Book{
    private String title;
    private String author;
    private String isbn;

    public Book(String title,String author, String isbn){
    this.title=title;
    this.author=author;  
    this.isbn=isbn;
    }
    public String getTitle() {return title; }
    public String getAuthor() {return author; }
    public String getIsbn() {return isbn; }
    public void displayInfo() {
        System.out.println("Tile:"+ title + ", Author:" + author + ", Isbn:" + isbn);
    }
}
class Library{
    private List<Book> books;
    public Library() {
        this.books = new ArrayList<> ();
    }
    public void addbook(Book book) {
        this.books.add(book);
        System.out.println(book.getTitle() + "book is added to the library.");
    }
    public void displayallbooks() {
        System.out.println("\n--------Library Collection-----------");
        if(books.isEmpty()){
            System.out.println("The Library is empty.");
            return;
        }    
        for (Book book : books) {
            book.displayInfo(); 
        }
          System.out.println("-----------------------------");
       }
}

public class Main2{
    public static void main(String[] args) {
        Library myLibrary = new Library();

        Book book1 = new Book("The Hobbit", "J.R.R. Tolkien", "978-0345339683");
        Book book2 = new Book("1984", "George Orwell", "978-0451524935");
        Book book3 = new Book("Dune", "Frank Herbert", "978-0441013593");

        myLibrary.addbook(book1);    
        myLibrary.addbook(book2);    
        myLibrary.addbook(book3);
        myLibrary.displayallbooks();    

    }

}