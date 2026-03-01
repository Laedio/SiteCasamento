document.addEventListener('DOMContentLoaded', () => {
    // 1. Animação de Surgir (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- SISTEMA DE CÓPIA DO PIX (MANTÉM CARACTERES, REMOVE APENAS ESPAÇOS) ---
const btnPix = document.getElementById('copy-btn');
const statusPix = document.getElementById('copy-status');
const chavePix = document.getElementById('pix-key');

if (btnPix && chavePix) {
    btnPix.addEventListener('click', () => {
        // Pega o texto exatamente como está escrito
        let textoOriginal = chavePix.innerText;
        
        // REMOVE APENAS OS ESPAÇOS (do início, do fim e do meio)
        // O caractere + e outros símbolos serão mantidos
        let textoSemEspacos = textoOriginal.replace(/\s+/g, '');

        navigator.clipboard.writeText(textoSemEspacos).then(() => {
            // Feedback visual de sucesso
            statusPix.classList.add('show');
            btnPix.style.background = "#4cd137"; // Verde Sucesso
            
            setTimeout(() => {
                statusPix.classList.remove('show');
                btnPix.style.background = ""; // Volta ao dourado original
            }, 3000);
        });
    });
}

    // 3. WhatsApp RSVP (Interatividade Premium)
    document.getElementById('rsvp-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('name').value;
        const presenca = document.getElementById('attendance').value;
        const msg = encodeURIComponent(`Olá! Confirmação de Presença:\n\n*Nome:* ${nome}\n*Presença:* ${presenca}`);
        window.open(`https://api.whatsapp.com/send?phone=5585991994249&text=${msg}`, '_blank');
    });
});
const btn = document.getElementById('copy-btn');
const status = document.getElementById('copy-status');
const key = document.getElementById('pix-key');

if (btn) {
    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(key.innerText).then(() => {
            status.classList.add('show');
            // Efeito visual no botão
            btn.style.background = "#4cd137";
            
            setTimeout(() => {
                status.classList.remove('show');
                btn.style.background = ""; // Volta ao dourado
            }, 3000);
        });
    });
}

// --- SISTEMA DE CÓPIA DO PIX (TEXTO INTERATIVO) ---
const btnPix = document.getElementById('copy-btn');
const statusPix = document.getElementById('copy-status');
const chavePix = document.getElementById('pix-key');

if (btnPix && chavePix) {
    btnPix.addEventListener('click', () => {
        let textoOriginal = chavePix.innerText;
        
        // Remove apenas espaços (mantém o + e outros caracteres)
        let textoSemEspacos = textoOriginal.replace(/\s+/g, '');

        navigator.clipboard.writeText(textoSemEspacos).then(() => {
            // 1. Muda o texto do botão
            const textoBotaoOriginal = btnPix.innerText;
            btnPix.innerText = "Copiado!";
            btnPix.classList.add('sucesso');
            
            // 2. Mostra a mensagem de status (opcional, já que o botão mudou)
            if(statusPix) statusPix.classList.add('show');
            
            setTimeout(() => {
                // Volta ao estado original após 3 segundos
                btnPix.innerText = textoBotaoOriginal;
                btnPix.classList.remove('sucesso');
                if(statusPix) statusPix.classList.remove('show');
            }, 3000);
        });
    });
}
function copiarPix(codigo, nomePresente) {
    const codigoLimpo = codigo.trim();
    
    navigator.clipboard.writeText(codigoLimpo).then(() => {
        // Preenche o nome do presente no modal
        document.getElementById('nome-presente-modal').innerText = nomePresente;
        
        // Exibe o modal
        const modal = document.getElementById('modal-pix');
        modal.style.display = 'flex';
        
        // Vibração discreta para confirmação táctil (em celulares)
        if (navigator.vibrate) navigator.vibrate(80);
        
    }).catch(err => {
        alert("Ops! Erro ao copiar. Tente novamente.");
    });
}

function fecharModal() {
    document.getElementById('modal-pix').style.display = 'none';
}

// Fecha o modal se o usuário clicar fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modal-pix');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}