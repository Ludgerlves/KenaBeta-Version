# 🚀 KENA – Plataforma de Conexão entre Empreendedores, Investidores e Mentores

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

## 📖 Sobre o Projeto
O **KENA** é um marketplace nacional que conecta **empreendedores**, **investidores** e **mentores**, promovendo oportunidades de investimento, parcerias e desenvolvimento de negócios.  
O foco inicial é a **conexão inteligente entre empreendedores e investidores**, com a funcionalidade de mentorias prevista para a segunda fase.

---

## 🎯 Objetivo
Facilitar a **captação de investimentos** por empreendedores, por meio de um sistema de **match automatizado**, chat interno e perfis detalhados.

---

## 🚀 Funcionalidades do MVP
- Cadastro e login com verificação e sistema antifraude.
- Perfis por tipo de usuário (**Empreendedor**, **Investidor**, **Mentor**).
- Upload de **pitch** (texto, imagem, vídeo ou PDF).
- Currículo e plano de negócios integrados via formulários inteligentes.
- Busca e filtros por setor, localização e palavras-chave.
- **Match** entre empreendedores e investidores baseado em critérios cruzados.
- Chat interno e painel de notificações.
- Publicações de investidores visíveis para empreendedores.

---

## 👥 Tipos de Usuário

### 👨‍💼 Empreendedor
- Nome, email e telefone (com verificação)
- Província
- Biografia breve
- Nome do projeto
- Nível de maturidade (Ideia, MVP, Operação, Expansão)
- Setor de atuação
- Pitch rápido (até 500 caracteres)
- Currículo empreendedor
- Plano de negócios

### 💰 Investidor
- Nome, email e telefone
- Província de atuação
- Áreas de interesse
- Tipo de projeto procurado
- Ticket de investimento (mínimo e máximo)
- Publicação de oportunidades

### 🎓 Mentor
- Nome, email e telefone
- Província
- Áreas de mentoria
- Comprovação de experiência:
  - Microempresa ativa (link, site ou CNPJ)
  - Formação técnica, superior ou certificado válido

---

## 🔗 Sistema de Conexão
- **Setor de interesse**
- **Ticket de investimento vs. necessidade do projeto**
- **Nível de maturidade**
- **Localização**
- **Palavras-chave**
- Após match: **Sala de conexão** com informações do projeto e chat.

---

## 📅 Roadmap
### **Versão 1 (MVP)**
- Cadastro/login
- Perfis por tipo de usuário
- Upload de pitch
- Busca e match
- Chat interno
- Publicações de oportunidades

### **Versão 2**
- Agenda de mentorias
- Videochamadas
- Avaliação pós-mentoria
- Recursos avançados para mentores

---

## 🛠 Tecnologias Utilizadas
- **Backend:** Node.js + TypeScript + Express
- **Banco de Dados:** MongoDB + Mongoose
- **Validação:** class-validator + class-transformer
- **Autenticação:** OAuth2 (sem JWT no MVP)
- **Upload de arquivos:** Multer / Cloud Storage
- **Tempo real:** Socket.IO (para chat e feed)
- **Infraestrutura:** Docker (desenvolvimento e deploy)

---

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/kena.git
cd kena

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Rodar em desenvolvimento
npm run dev
