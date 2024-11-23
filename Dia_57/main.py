# pip install pygame
import pygame
import sys

pygame.init()

WHITE = (255,255,255)
BLACK = (0,0,0)
RED = (255,0,0)
GREEN = (0,255,0)

WIDTH, HEIGTH= 300, 300
LINE_WIDTH = 15
BOARD_ROWS = 3
BOARD_COLS = 3
SQUARE_SIZE = WIDTH // BOARD_COLS
CIRCLE_RADIUS = SQUARE_SIZE // 3
CIRCLE_WIDTH = 15
CROSS_WIDTH = 14
SPACE = SQUARE_SIZE // 4

#configuração janela 
screen = pygame.display.set_mode((WIDTH,HEIGTH))
pygame.display.set_caption("Jogo da Velha")
screen.fill(WHITE)


# board
board = [[0] * BOARD_COLS for _ in range(BOARD_ROWS)]

def draw_lines():
    # linhas horizontais
    for row in range(1, BOARD_ROWS):
        pygame.draw.line(screen, BLACK, (0, row * SQUARE_SIZE), (WIDTH, row * SQUARE_SIZE), LINE_WIDTH)
    #linhas verticais
    for col in range(1, BOARD_COLS):
        pygame.draw.line(screen, BLACK, (col * SQUARE_SIZE, 0), (col * SQUARE_SIZE, HEIGTH), LINE_WIDTH)


# desenhar figuras

def draw_figures():
    for row in range(BOARD_ROWS):
        for col in range(BOARD_COLS):
            if board[row][col] == 1:
                pygame.draw.circle(screen, RED,(int(col * SQUARE_SIZE + SQUARE_SIZE // 2), int(row * SQUARE_SIZE + SQUARE_SIZE // 2)), CIRCLE_RADIUS, CIRCLE_WIDTH)
            elif board[row][col] == 2:
                pygame.draw.line(screen, GREEN, (col * SQUARE_SIZE + SPACE, row * SQUARE_SIZE + SQUARE_SIZE - SPACE), 
                                 (col * SQUARE_SIZE + SQUARE_SIZE - SPACE, row * SQUARE_SIZE + SPACE), CROSS_WIDTH)
                pygame.draw.line(screen, GREEN, (col * SQUARE_SIZE + SPACE, row * SQUARE_SIZE + SPACE), 
                                 (col * SQUARE_SIZE + SQUARE_SIZE - SPACE, row * SQUARE_SIZE + SQUARE_SIZE - SPACE), CROSS_WIDTH)
                

def check_win(player):
    # verificar linhas
    for row in range(BOARD_ROWS):
        if board[row][0] == board[row][1] == board[row][2] == player:
            draw_horizontal_winnig_line(row,player)
            return True

    # verificar colunas
    for col in range(BOARD_COLS):
        if board[2][col] == board[1][col] == board[0][col] == player:
            draw_vertical_winnig_line(col,player)
            return True

    # verificar diagonal
    if board[0][0] == board[1][1] == board[2][2] == player:
        draw_desc_diagonal(player)
        return True
    if board[2][0] == board[1][1] == board[0][2] == player:
        draw_asc_diagonal(player)
        return True
    return False

def draw_horizontal_winnig_line(row, player):
    posy = row * SQUARE_SIZE + SQUARE_SIZE // 2
    color = RED if player == 1 else GREEN
    pygame.draw.line(screen, color, (15, posy), (WIDTH - 15, posy), LINE_WIDTH)

def draw_vertical_winnig_line(col, player):
    posx = col * SQUARE_SIZE + SQUARE_SIZE // 2
    color = RED if player == 1 else GREEN
    pygame.draw.line(screen, color, (posx, 15), (posx, WIDTH - 15), LINE_WIDTH)

def draw_desc_diagonal(player):
    color = RED if player == 1 else GREEN
    pygame.draw.line(screen, color,(15,15), (WIDTH - 15, HEIGTH - 15), LINE_WIDTH)

def draw_asc_diagonal(player):
    color = RED if player == 1 else GREEN
    pygame.draw.line(screen, color,(15, HEIGTH - 15), (WIDTH - 15, 15), LINE_WIDTH)
 
def restart():
    screen.fill(WHITE)
    draw_lines()
    for row in range(BOARD_ROWS):
        for col in range(BOARD_COLS):
            board[row][col] = 0


draw_lines()

player = 1
game_over = False


while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.MOUSEBUTTONDOWN and not game_over:
            mousex = event.pos[0] # x
            mousey = event.pos[1] # y

            clicked_row = mousey // SQUARE_SIZE
            clicked_col = mousex // SQUARE_SIZE

            if board[clicked_row][clicked_col] == 0:
                board[clicked_row][clicked_col] = player
                if check_win(player):
                    game_over = True
                player = 2 if player == 1 else 1  

                draw_figures()  

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_r:
                restart()
                player = 1
                game_over=False     

        pygame.display.update()
        