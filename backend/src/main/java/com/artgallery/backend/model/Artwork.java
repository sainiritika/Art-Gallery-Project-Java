@Entity
public class Artwork {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String artist;

    @Column(name = "image_url")
    private String imageUrl;

    private String description;

    public Artwork() {}

    public Long getId() { return id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getArtist() { return artist; }
    public void setArtist(String artist) { this.artist = artist; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}