package com.artgallery.backend.controller;

import com.artgallery.backend.model.Review;
import com.artgallery.backend.repository.ReviewRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin("*")
public class ReviewController {

    private final ReviewRepository repository;

    public ReviewController(ReviewRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Review> getReviews() {
        return repository.findAll();
    }

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        return repository.save(review);
    }
}