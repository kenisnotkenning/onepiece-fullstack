package com.onepiece.onepiece;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CharacterController {

    @GetMapping("/character/{name}")
    public Map getCharacter(@PathVariable String name) {
        String url = "http://localhost:5000/character/" + name;
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Map.class);
    }
}
