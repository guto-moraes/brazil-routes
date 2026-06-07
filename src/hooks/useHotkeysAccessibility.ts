import { useNavigate } from "@tanstack/react-router";
import { useHotkey } from "@tanstack/react-hotkeys";

const useHotkeysAccessibility = () => {
    const navigate = useNavigate();

    // Acessibilidade
    useHotkey('Mod+Alt+A', () => {
        navigate({ to: "/$slug", params: { slug: "acessibilidade" } })
    });
    // Política de Privacidade
    useHotkey('Mod+Alt+P', () => {
        navigate({ to: "/$slug", params: { slug: "politica-de-privacidade" } })
    });
    // Página Inicial
    useHotkey('Mod+Shift+H', () => {
        navigate({ to: "/" })
    });
    // Sobre o Projeto
    useHotkey('Mod+Shift+A', () => {
        navigate({ to: "/$slug", params: { slug: "sobre-o-projeto" } })
    });
    // Impacto Social
    useHotkey('Mod+Shift+I', () => {
        navigate({ to: "/impacto-social" })
    });
    // Almanaque Digital
    useHotkey('Mod+Shift+B', () => {
        navigate({ to: "/almanaque-digital" })
    });
    // Agenda do Projeto
    useHotkey('Mod+Shift+O', () => {
        navigate({ to: "/agenda-do-projeto" })
    });    
    // Linha do Tempo
    useHotkey('Mod+Shift+L', () => {
        navigate({ to: "/almanaque-digital/linha-do-tempo" })
    });
    // Mapa Interativo
    useHotkey('Mod+Shift+M', () => {
        navigate({ to: "/almanaque-digital/mapa-interativo" })
    });
    // Fique por Dentro
    useHotkey('Mod+Alt+B', () => {
        navigate({ to: "/fique-por-dentro" })
    });
    // Vá Além
    useHotkey('Mod+Shift+V', () => {
        navigate({ to: "/almanaque-digital/va-alem" })
    });
    // Teste de Conhecimento
    useHotkey('Mod+Shift+Q', () => {
        navigate({ to: "/almanaque-digital/teste-de-conhecimento" })
    });
    // Equipe do Projeto
    useHotkey('Mod+Alt+T', () => {
        navigate({ to: "/equipe-do-projeto" })
    });
    // Apoio Financiero
    useHotkey('Mod+Alt+F', () => {
        navigate({ to: "/$slug", params: { slug: "apoio-financeiro" } })
    });
    // Glossário
    useHotkey('Mod+Alt+G', () => {
        navigate({ to: "/almanaque-digital/glossario" })
    });
    // Fale Conosco
    useHotkey('Mod+Shift+F', () => {
        navigate({ to: "/fale-conosco" })
    });

}

export default useHotkeysAccessibility;