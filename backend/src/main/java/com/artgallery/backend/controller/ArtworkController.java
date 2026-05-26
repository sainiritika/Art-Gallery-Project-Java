package com.artgallery.backend.controller;

import com.artgallery.backend.model.Artwork;
import com.artgallery.backend.repository.ArtworkRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artworks")
@CrossOrigin("*")
public class ArtworkController {

    private final ArtworkRepository repository;

    public ArtworkController(ArtworkRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Artwork> getAllArtworks() {
        return repository.findAll();
    }

    @PostMapping
    public Artwork addArtwork(@RequestBody Artwork artwork) {
        return repository.save(artwork);
    }
}