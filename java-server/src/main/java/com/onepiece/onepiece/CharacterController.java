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
        String url = "https://onepiece-api-a07f.onrender.com" + name;
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Map.class);
    }
}
