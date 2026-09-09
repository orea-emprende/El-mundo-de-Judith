<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>El Mundo de Judith • Arquitectura y Nutrición</title>
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
<!-- React and ReactDOM -->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<!-- Babel for JSX -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
body {
font-family: 'Plus Jakarta Sans', sans-serif;
}
.font-mono {
font-family: 'JetBrains Mono', monospace;
}
/* Custom scrollbar for sleek aesthetic */
::-webkit-scrollbar {
width: 4px;
height: 4px;
}
::-webkit-scrollbar-track {
background: #07101B;
}
::-webkit-scrollbar-thumb {
background: #0B6B81;
border-radius: 4px;
}
</style>
</head>
<body class="bg-[#07101B] text-[#B1B9C5]">
<div id="root"></div>
​<script type="text/babel">
const { useState, useEffect, useRef } = React;
const {
Home, Search, Plus, Bookmark, User, Calendar, Clock, Upload,
ChefHat, Salad, X, CheckCircle2, Flame, Award, ChevronLeft,
ChevronRight, Check, Lock, Mail, FileText, ArrowRight, Dog,
Sparkles, MessageSquare, Send, Bot, Bell, Volume2, Mic, Heart, Compass
} = lucide;
​function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [username, setUsername] = useState('Judith Floow');
const [password, setPassword] = useState('');
const [loginError, setLoginError] = useState('');
​const handleLogin = (e) => {
e.preventDefault();
if (username.trim() && password.trim()) {
setIsLoggedIn(true);
setLoginError('');
} else {
setLoginError('Por favor ingresa usuario y contraseña');
}
};
​const [currentTab, setCurrentTab] = useState('home');
const [selectedMonth, setSelectedMonth] = useState('julio-2026');
const [drawerOpen, setDrawerOpen] = useState(false);
const [pdfModalOpen, setPdfModalOpen] = useState(false);
const [aiModalOpen, setAiModalOpen] = useState(false);
const [remindersModalOpen, setRemindersModalOpen] = useState(false);
const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);
const [selectedIngredients, setSelectedIngredients] = useState({});
const [currentCategory, setCurrentCategory] = useState('nutricion');
​const [recetasPorMes, setRecetasPorMes] = useState({
'junio-2026': {
titulo: 'Plan 25 de Junio 2026',
paciente: 'Orea Tejeda Fernanda Judith (Judith Floow)',
comidas: {
desayuno: [
{
id: 1,
nombre: 'Huevos a la mexicana • Archistyle',
subtitulo: 'Desayuno Estructural',
colorBg: 'from-[#800B1F] to-[#5A0512]',
imagen: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
ingredientes: ['3 huevos', '2 tortillas de maíz', 'jitomate', 'cebolla', 'mix de vegetales verdes'],
prep: 'Pica cebolla y jitomate con precisión arquitectónica, sofríe, agrega el huevo y acompaña con tortillas.'
},
{
id: 2,
nombre: 'Huevo con brócoli • Minimalist',
subtitulo: 'Geometría Verde',
colorBg: 'from-[#12506F] to-[#0D2944]',
imagen: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
ingredientes: ['3 huevos', 'brócoli cocido', '2 tortillas de maíz', '1 taza de fresa'],
prep: 'Precalienta sartén con aceite de oliva, revuelve huevos con brócoli y sirve con fresas de postre.'
}
],
comida: [
{
id: 3,
nombre: 'Tostadas con atún • Bold Line',
subtitulo: 'Fresco & Audaz',
colorBg: 'from-[#800B1F] to-[#5A0512]',
imagen: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
ingredientes: ['4 tostadas horneadas', '1 lata de atún en agua', 'aceituna negra', 'mayonesa', 'vegetales verdes'],
prep: 'Pica la aceituna, mezcla con el atún y acompaña con tostadas.'
}
],
cena: [
{
id: 5,
nombre: 'Avena con yogur • Night Block',
subtitulo: 'Nocturno Nutritivo',
colorBg: 'from-[#12506F] to-[#800B1F]',
imagen: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80',
ingredientes: ['1/3 taza avena', 'yogurt natural', 'fresa', 'chía', 'proteína en polvo'],
prep: 'Licúa yogur y leche vegetal con proteína, mezcla avena y fresa, refrigera 4 horas.'
}
]
}
},
'julio-2026': {
titulo: 'Plan 24 de Julio 2026',
paciente: 'Orea Tejeda Fernanda Judith (Judith Floow)',
comidas: {
desayuno: [
{
id: 6,
nombre: 'Bistec con papa • Concrete Style',
subtitulo: 'Energía Muscular',
colorBg: 'from-[#800B1F] to-[#5A0512]',
imagen: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
ingredientes: ['75g bistec bola', '1 papa cocida', '1/2 taza brócoli cocido', '2 cditas aceite'],
prep: 'Sazona el bistec, asa a la parrilla y acompaña con papa y brócoli cocidos.'
},
{
id: 7,
nombre: 'Bistec en salsa verde • Brutalist',
subtitulo: 'Tradición & Diseño',
colorBg: 'from-[#12506F] to-[#0B6B81]',
imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
ingredientes: ['75g bistec bola', '1 papa cocida', '1/3 taza nopal cocido', 'tomate verde', 'cebolla'],
prep: 'Cocina el bistec, añade salsa verde de tomate/cebolla e incorpora los nopales.'
}
],
comida: [
{
id: 8,
nombre: 'Res molida con papas • Urban',
subtitulo: 'Plato Fuerte',
colorBg: 'from-[#800B1F] to-[#5A0512]',
imagen: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
ingredientes: ['120g res molida', '1 papa cocida', '1 jitomate', '1 cdita aceite'],
prep: 'Dora las papas, agrega el jitomate en cuadritos y la res molida sazonada.'
},
{
id: 9,
nombre: 'Ensalada de pavo • Sharp Lines',
subtitulo: 'Frescura Balanceada',
colorBg: 'from-[#12506F] to-[#800B1F]',
imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
ingredientes: ['4 rebanadas pechuga de pavo', '1/2 pera', 'espinaca', 'queso de cabra', 'nuez'],
prep: 'Cocina la pechuga de pavo y sirve sobre cama de espinacas con pera y nueces.'
}
],
cena: [
{
id: 10,
nombre: 'Arrachera a la parrilla • Avant-Garde',
subtitulo: 'Cena Especial',
colorBg: 'from-[#07101B] to-[#800B1F]',
imagen: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
ingredientes: ['90g arrachera de res', '1/3 taza frijoles refritos', 'totopos horneados', 'aguacate'],
prep: 'Asa la arrachera, acompaña con frijoles refritos, totopos y aguacate.'
}
]
}
}
});
​const [reminders, setReminders] = useState([
{ id: 1, title: 'Tomar Inositol (2g)', time: '02:00 PM', done: false, category: 'Salud' },
{ id: 2, title: 'Beber 8 vasos de agua natural', time: 'Todo el día', done: false, category: 'Nutrición' },
{ id: 3, title: 'Ejercicio de fuerza (30 min)', time: '06:00 PM', done: false, category: 'Fitness' },
{ id: 4, title: 'Revisión planos de obra arquitectónica', time: '11:00 AM', done: true, category: 'Arquitectura' },
{ id: 5, title: 'Paseo y juego con perritos', time: '05:00 PM', done: false, category: 'Mascotas' }
]);
const [newReminderText, setNewReminderText] = useState('');
const [newReminderTime, setNewReminderTime] = useState('');
​const toggleReminder = (id) => {
setReminders(reminders.map(r => r.id === id ? { ...r, done: !r.done } : r));
};
​const addReminder = (e) => {
e.preventDefault();
if (!newReminderText.trim()) return;
setReminders([...reminders, { id: Date.now(), title: newReminderText, time: newReminderTime || 'Hoy', done: false, category: 'Personal' }]);
setNewReminderText('');
setNewReminderTime('');
};
​const [chatMessages, setChatMessages] = useState([
{ sender: 'assistant', text: '¡Hola Judith! Soy FOREA, tu asistente virtual inteligente en El Mundo de Judith. Di la palabra "FOREA" para activarme por voz o escríbeme lo que necesites.' }
]);
const [inputMessage, setInputMessage] = useState('');
const [isAiLoading, setIsAiLoading] = useState(false);
const [isSpeaking, setIsSpeaking] = useState(false);
const [isListening, setIsListening] = useState(false);
​const speakText = (text) => {
if ('speechSynthesis' in window) {
window.speechSynthesis.cancel();
const utterance = new SpeechSynthesisUtterance(text);
utterance.lang = 'es-MX';
utterance.rate = 1.0;
utterance.pitch = 1.0;
utterance.onstart = () => setIsSpeaking(true);
utterance.onend = () => setIsSpeaking(false);
utterance.onerror = () => setIsSpeaking(false);
window.speechSynthesis.speak(utterance);
}
};
​useEffect(() => {
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
const recognition = new SpeechRecognition();
recognition.lang = 'es-MX';
recognition.continuous = true;
recognition.interimResults = false;
​recognition.onstart = () => setIsListening(true);
recognition.onend = () => {
setIsListening(false);
try {
recognition.start();
} catch (e) {}
};
recognition.onerror = () => setIsListening(false);
​recognition.onresult = (event) => {
const last = event.results.length - 1;
const transcript = event.results[last][0].transcript.trim();
const lower = transcript.toLowerCase();
​if (lower.includes('forea')) {
setAiModalOpen(true);
const userQuery = transcript.replace(/forea/gi, '').trim() || '¿Cuáles son mis pendientes o qué recomiendas hoy?';
handleVoiceCommandQuery(userQuery);
}
};
​try {
recognition.start();
} catch (err) {
console.log('Voice recognition auto-start error:', err);
}
}
}, []);
​const handleVoiceCommandQuery = async (queryText) => {
const newHistory = [...chatMessages, { sender: 'user', text: queryText }];
setChatMessages(newHistory);
setIsAiLoading(true);
​const lower = queryText.toLowerCase();
if (lower.includes('recordatorio') || lower.includes('pendiente') || lower.includes('hoy') || lower.includes('mañana')) {
const pending = reminders.filter(r => !r.done);
let reply = ¡Claro Judith! Tienes ${pending.length} recordatorios pendientes:\n + pending.map(p => • ${p.title} a las ${p.time}).join('\n');
if (pending.length === 0) {
reply = '¡Excelente trabajo Judith! No tienes ningún recordatorio pendiente, todo está completado con perfección arquitectónica.';
}
setChatMessages([...newHistory, { sender: 'assistant', text: reply }]);
setIsAiLoading(false);
speakText(reply);
return;
}
​try {
const apiKey = "";
const apiUrl = https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey};
​const systemPrompt = Eres FOREA, el asistente virtual oficial de "El Mundo de Judith" (Judith Floow / Orea Tejeda Fernanda Judith), arquitecta, dog lover y creativa. Conoces sus recordatorios, suplementos (Inositol, Ashwagandha, Omega 3) y recetas de junio y julio 2026. Responde con tono profesional, sofisticado, inteligente y con un toque cálido. Responde de forma concisa para que pueda ser hablado en voz alta.;
​const contents = [
{ role: 'user', parts: [{ text: systemPrompt + "\n\nAsunto de Judith: " + queryText }] }
];
​const response = await fetch(apiUrl, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ contents })
});
​const result = await response.json();
const reply = result?.candidates?.[0]?.content?.parts?.[0]?.text || "¡Entendido Judith! El Mundo de Judith está perfectamente estructurado.";
​setChatMessages([...newHistory, { sender: 'assistant', text: reply }]);
setIsAiLoading(false);
speakText(reply);
} catch (err) {
const fallback = "¡Hola Judith! FOREA aquí. Recuérdate hidratarte con tus 8 vasos de agua y tomar tu Inositol diario.";
setChatMessages([...newHistory, { sender: 'assistant', text: fallback }]);
setIsAiLoading(false);
speakText(fallback);
}
};
​const handleSendMessage = async (e) => {
e.preventDefault();
if (!inputMessage.trim() || isAiLoading) return;
const text = inputMessage;
setInputMessage('');
await handleVoiceCommandQuery(text);
};
​const [pdfFile, setPdfFile] = useState(null);
const [pdfMesNombre, setPdfMesNombre] = useState('agosto-2026');
const [pdfTituloMes, setPdfTituloMes] = useState('Plan Agosto 2026');
const [pdfSubiendo, setPdfSubiendo] = useState(false);
const [pdfMensajeExito, setPdfMensajeExito] = useState('');
​const handlePdfUpload = (e) => {
e.preventDefault();
if (!pdfFile) return;
setPdfSubiendo(true);
​setTimeout(() => {
const mesKey = pdfMesNombre;
let mesActual = recetasPorMes[mesKey] || {
titulo: pdfTituloMes,
paciente: username || 'Judith Floow • Orea Tejeda',
comidas: { desayuno: [], comida: [], cena: [] }
};
​mesActual.comidas.desayuno.push({
id: Date.now() + 1,
nombre: Blueprint Receta (${pdfFile.name.replace('.pdf', '')}),
subtitulo: 'Plan Arquitectónico Mensual',
colorBg: 'from-[#800B1F] to-[#5A0512]',
imagen: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
ingredientes: ['1 porción proteína estructural', 'Verduras libres al gusto', 'Aceite de aguacate', 'Agua natural'],
prep: 'Sigue las especificaciones geométricas de tu PDF mensual respetando raciones y porciones.'
});
​setRecetasPorMes({ ...recetasPorMes, [mesKey]: mesActual });
setSelectedMonth(mesKey);
setPdfSubiendo(false);
setPdfMensajeExito('¡PDF arquitectónico procesado y recetas actualizadas!');
setPdfFile(null);
setTimeout(() => setPdfMensajeExito(''), 4000);
}, 1500);
};
​const [diasCompletados, setDiasCompletados] = useState({
'2026-07-01': true,
'2026-07-02': true,
'2026-07-03': true,
'2026-07-04': true,
'2026-07-05': false,
});
​const toggleDiaCompletado = (fechaStr) => {
setDiasCompletados(prev => ({
...prev,
[fechaStr]: !prev[fechaStr]
}));
};
​const toggleIngredientSelection = (recipeId, ingredient) => {
setSelectedIngredients(prev => {
const currentRecipeSel = prev[recipeId] || [];
const exists = currentRecipeSel.includes(ingredient);
const updated = exists
? currentRecipeSel.filter(i => i !== ingredient)
: [...currentRecipeSel, ingredient];
return { ...prev, [recipeId]: updated };
});
};
​const totalCompletados = Object.values(diasCompletados).filter(Boolean).length;
​const mesActualData = recetasPorMes[selectedMonth];
const allRecipesForMonth = mesActualData ? [
...mesActualData.comidas.desayuno,
...mesActualData.comidas.comida,
...mesActualData.comidas.cena
] : [];
​const currentRecipe = allRecipesForMonth[activeRecipeIndex] || allRecipesForMonth[0];
const currentSelectedIngs = currentRecipe ? (selectedIngredients[currentRecipe.id] || []) : [];
​return (
<div className="flex justify-center items-center min-h-screen bg-[#07101B] font-sans p-4">
<div className="w-full max-w-[390px] h-[844px] bg-[#B1B9C5] rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative border-[8px] border-[#07101B]">
​{!isLoggedIn && (
<div className="absolute inset-0 z-50 bg-gradient-to-br from-[#0D2944] via-[#12506F] to-[#07101B] flex flex-col justify-between p-8 text-[#B1B9C5]">
<div className="pt-10 text-center space-y-2">
<div className="w-20 h-20 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] rounded-2xl rotate-3 flex items-center justify-center mx-auto shadow-2xl border-2 border-[#B1B9C5]/30">
<Compass className="w-10 h-10 text-white -rotate-3" />
</div>
<h1 className="text-xl font-black tracking-tighter text-white uppercase">El Mundo de Judith</h1>
<p className="text-[11px] text-[#B1B9C5]/80 font-mono tracking-widest">ARQUITECTURA • NUTRICIÓN • FOREA</p>
</div>
​<form onSubmit={handleLogin} className="space-y-4 bg-[#07101B]/50 p-6 rounded-3xl border border-[#0B6B81] backdrop-blur-md shadow-2xl">
<div className="flex items-center justify-center gap-1.5 mb-1">
<Sparkles className="w-4 h-4 text-[#800B1F]" />
<h2 className="text-xs font-bold text-white uppercase tracking-wider">Acceso a su Universo</h2>
</div>
​{loginError && (
<div className="bg-[#800B1F]/30 border border-[#800B1F] text-white text-[11px] p-2 rounded-xl text-center font-bold">
{loginError}
</div>
)}
​<div className="space-y-1">
<label className="text-[10px] uppercase font-mono font-bold text-[#B1B9C5]">Usuario</label>
<div className="relative">
<Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#B1B9C5]/60" />
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
className="w-full bg-[#07101B] border border-[#0B6B81] rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-[#B1B9C5]/40 focus:outline-none focus:border-[#800B1F]"
/>
</div>
</div>
​<div className="space-y-1">
<label className="text-[10px] uppercase font-mono font-bold text-[#B1B9C5]">Contraseña</label>
<div className="relative">
<Lock className="absolute left-3 top-3.5 w-4 h-4 text-[#B1B9C5]/60" />
<input
type="password"
placeholder="••••••••"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full bg-[#07101B] border border-[#0B6B81] rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-[#B1B9C5]/40 focus:outline-none focus:border-[#800B1F]"
/>
</div>
</div>
​<button 
type="submit" 
className="w-full bg-gradient-to-r from-[#800B1F] to-[#5A0512] hover:opacity-95 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider mt-2"
>
Entrar al Mundo <ArrowRight className="w-4 h-4" />
</button>
</form>
​<div className="text-center pb-2 flex items-center justify-center gap-2">
<span className={w-2 h-2 rounded-full ${isListening ? 'bg-[#10B981] animate-ping' : 'bg-[#800B1F]'}}></span>
<p className="text-[9px] text-[#B1B9C5]/60 font-mono">Di "FOREA" para activar asistente por voz</p>
</div>
</div>
)}
​{/* Top Header Bar */}
<div className="bg-gradient-to-r from-[#0D2944] via-[#12506F] to-[#07101B] text-[#B1B9C5] px-6 pt-12 pb-5 rounded-b-[30px] shadow-md border-b border-[#0B6B81]/30">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] rounded-lg shadow">
<Dog className="w-4 h-4 text-white" />
</div>
<div>
<span className="text-[9px] uppercase tracking-wider text-[#0B6B81] font-mono font-bold block">Universo Personal</span>
<h2 className="text-xs font-bold text-white">Judith Floow</h2>
</div>
</div>
<div className="flex items-center gap-2">
<button
onClick={() => setAiModalOpen(true)}
className="p-2 bg-[#800B1F]/20 hover:bg-[#800B1F]/40 border border-[#800B1F] rounded-xl text-white relative transition"
title="FOREA Asistente"
>
<Bot className="w-4 h-4 text-[#800B1F]" />
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#800B1F] rounded-full animate-pulse"></span>
</button>
<button
onClick={() => setDrawerOpen(true)}
className="p-2 bg-[#07101B] border border-[#0B6B81] rounded-xl text-white hover:bg-[#0B6B81]/20 transition"
>
<User className="w-4 h-4" />
</button>
</div>
</div>
</div>
​{/* Main Content Area */}
<div className="flex-1 overflow-y-auto p-5 pb-24 space-y-5 bg-[#07101B]">
​{/* HOME TAB /}
{currentTab === 'home' && (
<div className="space-y-4">
{/ Welcome Banner */}
<div className="relative bg-gradient-to-br from-[#0D2944] via-[#12506F] to-[#07101B] p-5 rounded-3xl border border-[#0B6B81]/40 shadow-xl overflow-hidden">
<div className="absolute right-[-20px] bottom-[-20px] opacity-10">
<Compass className="w-40 h-40 text-white" />
</div>
<div className="relative z-10 space-y-2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#800B1F]/30 border border-[#800B1F] text-[10px] text-white font-bold uppercase tracking-wider">
<Sparkles className="w-3 h-3 text-[#800B1F]" /> Arquitectura & Bienestar
</div>
<h3 className="text-base font-black text-white">Hola, Judith. Tu mundo está sincronizado.</h3>
<p className="text-xs text-[#B1B9C5]/80 leading-relaxed">
Plan activo: <strong className="text-white">{mesActualData?.titulo}</strong>. FOREA está activa para comandos de voz o texto.
</p>
<div className="pt-2 flex items-center gap-2">
<button
onClick={() => setPdfModalOpen(true)}
className="bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white text-[11px] font-bold px-3.5 py-2 rounded-xl shadow flex items-center gap-1.5"
>
<Upload className="w-3.5 h-3.5" /> Subir PDF del Mes
</button>
<button
onClick={() => setCurrentTab('recipes')}
className="bg-[#07101B] border border-[#0B6B81] text-[#B1B9C5] text-[11px] font-bold px-3.5 py-2 rounded-xl hover:text-white"
>
Ver Menú
</button>
</div>
</div>
</div>
​{/* Quick Stats / Suplementos & Agua */}
<div className="grid grid-cols-2 gap-3">
<div className="bg-[#0D2944]/60 border border-[#0B6B81]/40 p-4 rounded-2xl flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono font-bold text-[#0B6B81] uppercase">Hidratación</span>
<Flame className="w-4 h-4 text-[#800B1F]" />
</div>
<div className="my-2">
<p className="text-lg font-black text-white">7 / 8</p>
<p className="text-[10px] text-[#B1B9C5]/70">Vasos de agua</p>
</div>
<div className="w-full bg-[#07101B] h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-[#0B6B81] to-[#12506F] h-full w-[85%]"></div>
</div>
</div>
​<div className="bg-[#0D2944]/60 border border-[#0B6B81]/40 p-4 rounded-2xl flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono font-bold text-[#800B1F] uppercase">Suplementos</span>
<Award className="w-4 h-4 text-[#800B1F]" />
</div>
<div className="my-1 space-y-0.5">
<p className="text-xs font-bold text-white">Inositol (2g)</p>
<p className="text-[9px] text-[#10B981] font-mono">✓ Tomado a las 14:00</p>
</div>
<span className="text-[9px] text-[#B1B9C5]/60 font-mono">Ashwagandha / Omega 3</span>
</div>
</div>
​{/* Reminders Widget */}
<div className="bg-[#0D2944]/40 border border-[#0B6B81]/30 p-4 rounded-2xl space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Bell className="w-4 h-4 text-[#800B1F]" />
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Pendientes del Día</h4>
</div>
<button onClick={() => setRemindersModalOpen(true)} className="text-[10px] text-[#0B6B81] font-bold hover:underline">
Ver todos ({reminders.length})
</button>
</div>
<div className="space-y-2">
{reminders.slice(0, 3).map(rem => (
<div key={rem.id} onClick={() => toggleReminder(rem.id)} className="flex items-center justify-between p-2.5 bg-[#07101B] border border-[#0B6B81]/30 rounded-xl cursor-pointer hover:border-[#800B1F]/50 transition">
<div className="flex items-center gap-2">
<div className={w-4 h-4 rounded-md border flex items-center justify-center ${rem.done ? 'bg-[#10B981] border-[#10B981]' : 'border-[#0B6B81]'}}>
{rem.done && <Check className="w-3 h-3 text-white" />}
</div>
<span className={text-xs ${rem.done ? 'line-through text-[#B1B9C5]/40' : 'text-white font-medium'}}>{rem.title}</span>
</div>
<span className="text-[9px] font-mono text-[#B1B9C5]/60">{rem.time}</span>
</div>
))}
</div>
</div>
</div>
)}
​{/* RECIPES / NUTRITION TAB */}
{currentTab === 'recipes' && (
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Menú Nutricional</h3>
<p className="text-[10px] text-[#B1B9C5]/70 font-mono">{mesActualData?.titulo}</p>
</div>
<select
value={selectedMonth}
onChange={(e) => setSelectedMonth(e.target.value)}
className="bg-[#0D2944] border border-[#0B6B81] text-xs text-white rounded-xl px-2.5 py-1.5 focus:outline-none"
>
{Object.keys(recetasPorMes).map(mKey => (
<option key={mKey} value={mKey}>{recetasPorMes[mKey].titulo}</option>
))}
</select>
</div>
​{/* Recipe Carousel Card */}
{currentRecipe && (
<div className="bg-[#0D2944]/60 border border-[#0B6B81]/40 rounded-3xl overflow-hidden shadow-xl space-y-3">
<div className="relative h-44 w-full">
<img src={currentRecipe.imagen} alt={currentRecipe.nombre} className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-gradient-to-t from-[#07101B] via-transparent to-transparent"></div>
<span className="absolute top-3 left-3 bg-[#800B1F] text-white text-[9px] font-bold uppercase px-2.5 py-1 rounded-full shadow">
{currentRecipe.subtitulo}
</span>
</div>
​<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<h4 className="text-sm font-black text-white">{currentRecipe.nombre}</h4>
<div className="flex items-center gap-1">
<button
onClick={() => setActiveRecipeIndex(prev => (prev > 0 ? prev - 1 : allRecipesForMonth.length - 1))}
className="p-1.5 bg-[#07101B] border border-[#0B6B81] rounded-lg text-white"
>
<ChevronLeft className="w-4 h-4" />
</button>
<button
onClick={() => setActiveRecipeIndex(prev => (prev < allRecipesForMonth.length - 1 ? prev + 1 : 0))}
className="p-1.5 bg-[#07101B] border border-[#0B6B81] rounded-lg text-white"
>
<ChevronRight className="w-4 h-4" />
</button>
</div>
</div>
​<div className="space-y-1.5">
<p className="text-[10px] font-mono font-bold text-[#0B6B81] uppercase">Ingredientes (Toca para tachar):</p>
<div className="flex flex-wrap gap-1.5">
{currentRecipe.ingredientes.map((ing, idx) => {
const isSelected = currentSelectedIngs.includes(ing);
return (
<button
key={idx}
onClick={() => toggleIngredientSelection(currentRecipe.id, ing)}
className={text-[11px] px-2.5 py-1 rounded-lg border transition ${isSelected ? 'bg-[#800B1F]/30 border-[#800B1F] text-white line-through' : 'bg-[#07101B] border-[#0B6B81]/40 text-[#B1B9C5]'}}
>
{ing}
</button>
);
})}
</div>
</div>
​<div className="bg-[#07101B] p-3 rounded-2xl border border-[#0B6B81]/30">
<p className="text-[10px] font-mono font-bold text-[#800B1F] uppercase mb-1">Preparación Arquitectónica:</p>
<p className="text-xs text-[#B1B9C5]/90 leading-relaxed">{currentRecipe.prep}</p>
</div>
</div>
</div>
)}
</div>
)}
​{/* ARCHITECTURE & DOGS TAB */}
{currentTab === 'architecture' && (
<div className="space-y-4">
<div className="bg-gradient-to-r from-[#0D2944] to-[#12506F] p-4 rounded-3xl border border-[#0B6B81]/40 space-y-2">
<div className="flex items-center gap-2">
<Compass className="w-5 h-5 text-[#800B1F]" />
<h3 className="text-sm font-black text-white uppercase tracking-wider">Estudio & Pasiones</h3>
</div>
<p className="text-xs text-[#B1B9C5]/80">
Espacio dedicado al diseño arquitectónico, planos estructurales y el amor incondicional por los perritos.
</p>
</div>
​<div className="grid grid-cols-2 gap-3">
<div className="bg-[#0D2944]/50 border border-[#0B6B81]/40 p-4 rounded-2xl space-y-2">
<FileText className="w-5 h-5 text-[#800B1F]" />
<h4 className="text-xs font-bold text-white">Planos & Proyectos</h4>
<p className="text-[10px] text-[#B1B9C5]/70">Revisión de volumetría, cotizaciones y renders 3D.</p>
</div>
​<div className="bg-[#0D2944]/50 border border-[#0B6B81]/40 p-4 rounded-2xl space-y-2">
<Dog className="w-5 h-5 text-[#800B1F]" />
<h4 className="text-xs font-bold text-white">Dog Lover Zone</h4>
<p className="text-[10px] text-[#B1B9C5]/70">Paseos, rutinas de juego y bienestar perruno.</p>
</div>
</div>
</div>
)}
​{/* CALENDAR / PROGRESS TAB */}
{currentTab === 'calendar' && (
<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Calendario & Seguimiento</h3>
<span className="text-[10px] font-mono bg-[#800B1F]/30 text-white px-2.5 py-1 rounded-full border border-[#800B1F]">
{totalCompletados} días cumplidos
</span>
</div>
​<div className="bg-[#0D2944]/50 border border-[#0B6B81]/40 p-4 rounded-3xl space-y-3">
<p className="text-xs font-bold text-white">Julio 2026 - Constancia Nutricional</p>
<div className="grid grid-cols-5 gap-2">
{['2026-07-01', '2026-07-02', '2026-07-03', '2026-07-04', '2026-07-05'].map((fecha, idx) => {
const completado = diasCompletados[fecha];
return (
<button
key={fecha}
onClick={() => toggleDiaCompletado(fecha)}
className={p-3 rounded-2xl border flex flex-col items-center gap-1 transition ${completado ? 'bg-[#800B1F] border-[#800B1F] text-white shadow-lg' : 'bg-[#07101B] border-[#0B6B81]/40 text-[#B1B9C5]'}}
>
<span className="text-[10px] font-mono">Día {idx + 1}</span>
<Check className={w-4 h-4 ${completado ? 'text-white' : 'text-transparent'}} />
</button>
);
})}
</div>
<p className="text-[10px] text-[#B1B9C5]/60 text-center font-mono">Toca un día para marcarlo como completado en tu plan.</p>
</div>
</div>
)}
​</div>
​{/* Bottom Navigation Bar */}
<div className="absolute bottom-0 left-0 right-0 h-16 bg-[#07101B]/90 border-t border-[#0B6B81]/30 backdrop-blur-md flex items-center justify-around px-2 z-30">
<button
onClick={() => setCurrentTab('home')}
className={flex flex-col items-center gap-1 ${currentTab === 'home' ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60'}}
>
<Home className="w-5 h-5" />
<span className="text-[9px] font-bold">Inicio</span>
</button>
<button
onClick={() => setCurrentTab('recipes')}
className={flex flex-col items-center gap-1 ${currentTab === 'recipes' ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60'}}
>
<Salad className="w-5 h-5" />
<span className="text-[9px] font-bold">Menú</span>
</button>
<button
onClick={() => setAiModalOpen(true)}
className="flex flex-col items-center -mt-5"
>
<div className="w-12 h-12 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] rounded-full flex items-center justify-center text-white shadow-xl border-2 border-[#07101B]">
<Bot className="w-6 h-6" />
</div>
<span className="text-[9px] font-bold text-[#800B1F] mt-0.5">FOREA</span>
</button>
<button
onClick={() => setCurrentTab('architecture')}
className={flex flex-col items-center gap-1 ${currentTab === 'architecture' ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60'}}
>
<Compass className="w-5 h-5" />
<span className="text-[9px] font-bold">Estudio</span>
</button>
<button
onClick={() => setCurrentTab('calendar')}
className={flex flex-col items-center gap-1 ${currentTab === 'calendar' ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60'}}
>
<Calendar className="w-5 h-5" />
<span className="text-[9px] font-bold">Agenda</span>
</button>
</div>
​{/* FOREA AI Modal */}
{aiModalOpen && (
<div className="absolute inset-0 z-50 bg-[#07101B]/90 backdrop-blur-md flex flex-col">
<div className="p-4 bg-gradient-to-r from-[#0D2944] to-[#12506F] border-b border-[#0B6B81]/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-[#800B1F] flex items-center justify-center text-white font-black">F</div>
<div>
<h3 className="text-xs font-bold text-white uppercase">FOREA Asistente</h3>
<p className="text-[9px] text-[#B1B9C5]/70 font-mono">Voz y Inteligencia Artificial</p>
</div>
</div>
<button onClick={() => setAiModalOpen(false)} className="p-1 text-white hover:bg-[#0B6B81]/30 rounded-lg">
<X className="w-5 h-5" />
</button>
</div>
​<div className="flex-1 p-4 overflow-y-auto space-y-3">
{chatMessages.map((msg, idx) => (
<div key={idx} className={flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}}>
<div className={max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${msg.sender === 'user' ? 'bg-[#800B1F] text-white rounded-br-none' : 'bg-[#0D2944] text-[#B1B9C5] border border-[#0B6B81]/40 rounded-bl-none'}}>
{msg.text}
</div>
</div>
))}
{isAiLoading && (
<div className="flex justify-start">
<div className="bg-[#0D2944] p-3 rounded-2xl text-xs text-[#B1B9C5] animate-pulse">
FOREA está pensando...
</div>
</div>
)}
</div>
​<form onSubmit={handleSendMessage} className="p-3 bg-[#0D2944] border-t border-[#0B6B81]/40 flex items-center gap-2">
<input
type="text"
placeholder="Escribe a FOREA o di 'FOREA'..."
value={inputMessage}
onChange={(e) => setInputMessage(e.target.value)}
className="flex-1 bg-[#07101B] border border-[#0B6B81] rounded-xl px-3 py-2 text-xs text-white placeholder-[#B1B9C5]/40 focus:outline-none"
/>
<button type="submit" className="bg-[#800B1F] text-white p-2.5 rounded-xl">
<Send className="w-4 h-4" />
</button>
</form>
</div>
)}
​{/* PDF Upload Modal */}
{pdfModalOpen && (
<div className="absolute inset-0 z-50 bg-[#07101B]/90 backdrop-blur-md flex flex-col justify-end">
<div className="bg-[#0D2944] border-t border-[#0B6B81] p-6 rounded-t-[30px] space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Subir PDF Nutricional</h3>
<button onClick={() => setPdfModalOpen(false)} className="p-1 text-white"><X className="w-5 h-5" /></button>
</div>
​{pdfMensajeExito && (
<div className="bg-[#10B981]/20 border border-[#10B981] text-white text-xs p-3 rounded-xl text-center font-bold">
{pdfMensajeExito}
</div>
)}
​<form onSubmit={handlePdfUpload} className="space-y-3">
<div>
<label className="text-[10px] uppercase font-mono text-[#B1B9C5] font-bold">Mes del Plan (ej. agosto-2026)</label>
<input
type="text"
value={pdfMesNombre}
onChange={(e) => setPdfMesNombre(e.target.value)}
className="w-full bg-[#07101B] border border-[#0B6B81] rounded-xl p-2.5 text-xs text-white mt-1"
/>
</div>
​<div>
<label className="text-[10px] uppercase font-mono text-[#B1B9C5] font-bold">Título del Mes</label>
<input
type="text"
value={pdfTituloMes}
onChange={(e) => setPdfTituloMes(e.target.value)}
className="w-full bg-[#07101B] border border-[#0B6B81] rounded-xl p-2.5 text-xs text-white mt-1"
/>
</div>
​<div>
<label className="text-[10px] uppercase font-mono text-[#B1B9C5] font-bold">Archivo PDF</label>
<input
type="file"
accept=".pdf"
onChange={(e) => setPdfFile(e.target.files[0])}
className="w-full text-xs text-[#B1B9C5] mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#800B1F] file:text-white"
/>
</div>
​<button 
type="submit" 
disabled={pdfSubiendo}
className="w-full bg-[#800B1F] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider mt-2 shadow"
>
{pdfSubiendo ? 'Procesando PDF...' : 'Importar y Actualizar Menú'}
</button>
</form>
</div>
</div>
)}
​{/* Reminders Modal */}
{remindersModalOpen && (
<div className="absolute inset-0 z-50 bg-[#07101B]/90 backdrop-blur-md flex flex-col">
<div className="p-4 bg-gradient-to-r from-[#0D2944] to-[#12506F] border-b border-[#0B6B81]/40 flex items-center justify-between">
<h3 className="text-xs font-bold text-white uppercase tracking-wider">Gestor de Recordatorios</h3>
<button onClick={() => setRemindersModalOpen(false)} className="p-1 text-white"><X className="w-5 h-5" /></button>
</div>
​<div className="flex-1 p-4 overflow-y-auto space-y-3">
<form onSubmit={addReminder} className="flex gap-2">
<input
type="text"
placeholder="Nuevo recordatorio..."
value={newReminderText}
onChange={(e) => setNewReminderText(e.target.value)}
className="flex-1 bg-[#0D2944] border border-[#0B6B81] rounded-xl px-3 py-2 text-xs text-white placeholder-[#B1B9C5]/40"
/>
<button type="submit" className="bg-[#800B1F] text-white px-4 rounded-xl text-xs font-bold">Agregar</button>
</form>
​<div className="space-y-2 pt-2">
{reminders.map(rem => (
<div key={rem.id} onClick={() => toggleReminder(rem.id)} className="flex items-center justify-between p-3 bg-[#0D2944]/60 border border-[#0B6B81]/30 rounded-xl cursor-pointer">
<div className="flex items-center gap-2">
<div className={w-4 h-4 rounded-md border flex items-center justify-center ${rem.done ? 'bg-[#10B981] border-[#10B981]' : 'border-[#0B6B81]'}}>
{rem.done && <Check className="w-3 h-3 text-white" />}
</div>
<span className={text-xs ${rem.done ? 'line-through text-[#B1B9C5]/40' : 'text-white font-medium'}}>{rem.title}</span>
</div>
<span className="text-[9px] font-mono text-[#B1B9C5]/60">{rem.time}</span>
</div>
))}
</div>
</div>
</div>
)}
​{/* User Drawer Modal */}
{drawerOpen && (
<div className="absolute inset-0 z-50 bg-[#07101B]/90 backdrop-blur-md flex flex-col justify-end">
<div className="bg-[#0D2944] border-t border-[#0B6B81] p-6 rounded-t-[30px] space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-bold text-white uppercase">Perfil de Judith</h3>
<button onClick={() => setDrawerOpen(false)} className="p-1 text-white"><X className="w-5 h-5" /></button>
</div>
​<div className="space-y-3 bg-[#07101B] p-4 rounded-2xl border border-[#0B6B81]/40">
<div>
<span className="text-[10px] font-mono text-[#0B6B81] uppercase font-bold">Paciente / Usuario</span>
<p className="text-xs text-white font-bold">{username} (Orea Tejeda Fernanda Judith)</p>
</div>
<div>
<span className="text-[10px] font-mono text-[#0B6B81] uppercase font-bold">Especialidad</span>
<p className="text-xs text-white font-bold">Arquitectura • Creativa • Dog Lover</p>
</div>
</div>
​<button
onClick={() => { setIsLoggedIn(false); setDrawerOpen(false); }}
className="w-full bg-[#800B1F] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow"
>
Cerrar Sesión
</button>
</div>
</div>
)}
​</div>
</div>
);
}
​ReactDOM.render(<App />, document.getElementById('root'));
</script>
</body>
</html>