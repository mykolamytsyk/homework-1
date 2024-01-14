print("hello word")
pygame.init()

HEIGHT = 800
WIDTH = 1200

main_display = pygame.display.set_mode((WIDTH, HEIGHT))

playing = True

while playing:
    for event in pygame.event.get():
        if event.type == QUIT:
            playing = False