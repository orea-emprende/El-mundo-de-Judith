import React, { useState, useEffect } from 'react';
import { Home, Search, Plus, Bookmark, User, Calendar, Clock, Upload, ChefHat, Salad, X, CheckCircle2, Flame, Award, ChevronLeft, ChevronRight, Check, Lock, Mail, FileText, ArrowRight, Dog, Sparkles, MessageSquare, Send, Bot, Bell, Volume2, Mic, Heart, Compass } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('Judith Floow');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Por favor ingresa usuario y contraseña');
    }
  };

  const [currentTab, setCurrentTab] = useState('home');
  const [selectedMonth, setSelectedMonth] = useState('julio-2026');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [remindersModalOpen, setRemindersModalOpen] = useState(false);
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState({});
  const [currentCategory, setCurrentCategory] = useState('nutricion');

  const [recetasPorMes, setRecetasPorMes] = useState({
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

  const [reminders, setReminders] = useState([
    { id: 1, title: 'Tomar Inositol (2g)', time: '02:00 PM', done: false, category: 'Salud' },
    { id: 2, title: 'Beber 8 vasos de agua natural', time: 'Todo el día', done: false, category: 'Nutrición' },
    { id: 3, title: 'Ejercicio de fuerza (30 min)', time: '06:00 PM', done: false, category: 'Fitness' },
    { id: 4, title: 'Revisión planos de obra arquitectónica', time: '11:00 AM', done: true, category: 'Arquitectura' },
    { id: 5, title: 'Paseo y juego con perritos', time: '05:00 PM', done: false, category: 'Mascotas' }
  ]);
  const [newReminderText, setNewReminderText] = useState('');
  const [newReminderTime, setNewReminderTime] = useState('');

  const toggleReminder = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, done: !r.done } : r));
  };

  const addReminder = (e) => {
    e.preventDefault();
    if (!newReminderText.trim()) return;
    setReminders([...reminders, { id: Date.now(), title: newReminderText, time: newReminderTime || 'Hoy', done: false, category: 'Personal' }]);
    setNewReminderText('');
    setNewReminderTime('');
  };

  const [chatMessages, setChatMessages] = useState([
    { sender: 'assistant', text: '¡Hola Judith! Soy FOREA, tu asistente virtual inteligente en El Mundo de Judith. Di la palabra "FOREA" para activarme por voz o escríbeme lo que necesites.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speakText = (text) => {
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

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'es-MX';
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => {
        setIsListening(false);
        try {
          recognition.start();
        } catch (e) {}
      };
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript.trim();
        const lower = transcript.toLowerCase();

        if (lower.includes('forea')) {
          setAiModalOpen(true);
          const userQuery = transcript.replace(/forea/gi, '').trim() || '¿Cuáles son mis pendientes o qué recomiendas hoy?';
          handleVoiceCommandQuery(userQuery);
        }
      };

      try {
        recognition.start();
      } catch (err) {
        console.log('Voice recognition auto-start error:', err);
      }
    }
  }, []);

  const handleVoiceCommandQuery = async (queryText) => {
    const newHistory = [...chatMessages, { sender: 'user', text: queryText }];
    setChatMessages(newHistory);
    setIsAiLoading(true);

    const lower = queryText.toLowerCase();
    if (lower.includes('recordatorio') || lower.includes('pendiente') || lower.includes('hoy') || lower.includes('mañana')) {
      const pending = reminders.filter(r => !r.done);
      let reply = `¡Claro Judith! Tienes ${pending.length} recordatorios pendientes:\n` + pending.map(p => `• ${p.title} a las ${p.time}`).join('\n');
      if (pending.length === 0) {
        reply = '¡Excelente trabajo Judith! No tienes ningún recordatorio pendiente, todo está completado con perfección arquitectónica.';
      }
      setChatMessages([...newHistory, { sender: 'assistant', text: reply }]);
      setIsAiLoading(false);
      speakText(reply);
      return;
    }

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const systemPrompt = `Eres FOREA, el asistente virtual oficial de "El Mundo de Judith" (Judith Floow / Orea Tejeda Fernanda Judith), arquitecta, dog lover y creativa. Conoces sus recordatorios, suplementos (Inositol, Ashwagandha, Omega 3) y recetas de junio y julio 2026.
Responde con tono profesional, sofisticado, inteligente y con un toque cálido. Responde de forma concisa para que pueda ser hablado en voz alta.`;

      const contents = [
        { role: 'user', parts: [{ text: systemPrompt + "\n\nAsunto de Judith: " + queryText }] }
      ];

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      });

      const result = await response.json();
      const reply = result?.candidates?.[0]?.content?.parts?.[0]?.text || "¡Entendido Judith! El Mundo de Judith está perfectamente estructurado.";

      setChatMessages([...newHistory, { sender: 'assistant', text: reply }]);
      setIsAiLoading(false);
      speakText(reply);
    } catch (err) {
      const fallback = "¡Hola Judith! FOREA aquí. Recuérdate hidratarte con tus 8 vasos de agua y tomar tu Inositol diario.";
      setChatMessages([...newHistory, { sender: 'assistant', text: fallback }]);
      setIsAiLoading(false);
      speakText(fallback);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isAiLoading) return;
    const text = inputMessage;
    setInputMessage('');
    await handleVoiceCommandQuery(text);
  };

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfMesNombre, setPdfMesNombre] = useState('agosto-2026');
  const [pdfTituloMes, setPdfTituloMes] = useState('Plan Agosto 2026');
  const [pdfSubiendo, setPdfSubiendo] = useState(false);
  const [pdfMensajeExito, setPdfMensajeExito] = useState('');

  const handlePdfUpload = (e) => {
    e.preventDefault();
    if (!pdfFile) return;
    setPdfSubiendo(true);

    setTimeout(() => {
      const mesKey = pdfMesNombre;
      let mesActual = recetasPorMes[mesKey] || {
        titulo: pdfTituloMes,
        paciente: username || 'Judith Floow • Orea Tejeda',
        comidas: { desayuno: [], comida: [], cena: [] }
      };

      mesActual.comidas.desayuno.push({
        id: Date.now() + 1,
        nombre: `Blueprint Receta (${pdfFile.name.replace('.pdf', '')})`,
        subtitulo: 'Plan Arquitectónico Mensual',
        colorBg: 'from-[#800B1F] to-[#5A0512]',
        imagen: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
        ingredientes: ['1 porción proteína estructural', 'Verduras libres al gusto', 'Aceite de aguacate', 'Agua natural'],
        prep: 'Sigue las especificaciones geométricas de tu PDF mensual respetando raciones y porciones.'
      });

      setRecetasPorMes({ ...recetasPorMes, [mesKey]: mesActual });
      setSelectedMonth(mesKey);
      setPdfSubiendo(false);
      setPdfMensajeExito('¡PDF arquitectónico procesado y recetas actualizadas!');
      setPdfFile(null);
      setTimeout(() => setPdfMensajeExito(''), 4000);
    }, 1500);
  };

  const [diasCompletados, setDiasCompletados] = useState({
    '2026-07-01': true,
    '2026-07-02': true,
    '2026-07-03': true,
    '2026-07-04': true,
    '2026-07-05': false,
  });

  const toggleDiaCompletado = (fechaStr) => {
    setDiasCompletados(prev => ({
      ...prev,
      [fechaStr]: !prev[fechaStr]
    }));
  };

  const toggleIngredientSelection = (recipeId, ingredient) => {
    setSelectedIngredients(prev => {
      const currentRecipeSel = prev[recipeId] || [];
      const exists = currentRecipeSel.includes(ingredient);
      const updated = exists 
        ? currentRecipeSel.filter(i => i !== ingredient)
        : [...currentRecipeSel, ingredient];
      return { ...prev, [recipeId]: updated };
    });
  };

  const totalCompletados = Object.values(diasCompletados).filter(Boolean).length;
  
  const mesActualData = recetasPorMes[selectedMonth];
  const allRecipesForMonth = mesActualData ? [
    ...mesActualData.comidas.desayuno,
    ...mesActualData.comidas.comida,
    ...mesActualData.comidas.cena
  ] : [];

  const currentRecipe = allRecipesForMonth[activeRecipeIndex] || allRecipesForMonth[0];
  const currentSelectedIngs = currentRecipe ? (selectedIngredients[currentRecipe.id] || []) : [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#07101B] font-sans p-4">
      
      <div className="w-full max-w-[390px] h-[844px] bg-[#B1B9C5] rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative border-[8px] border-[#07101B]">
        
        {!isLoggedIn ? (
          <div className="absolute inset-0 z-50 bg-gradient-to-br from-[#0D2944] via-[#12506F] to-[#07101B] flex flex-col justify-between p-8 text-[#B1B9C5]">
            <div className="pt-10 text-center space-y-2">
              <div className="w-20 h-20 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] rounded-2xl rotate-3 flex items-center justify-center mx-auto shadow-2xl border-2 border-[#B1B9C5]/30">
                <Compass className="w-10 h-10 text-white -rotate-3" />
              </div>
              <h1 className="text-xl font-black tracking-tighter text-white uppercase">El Mundo de Judith</h1>
              <p className="text-[11px] text-[#B1B9C5]/80 font-mono tracking-widest">ARQUITECTURA • NUTRICIÓN • FOREA</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 bg-[#07101B]/50 p-6 rounded-3xl border border-[#0B6B81] backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Sparkles className="w-4 h-4 text-[#800B1F]" />
                <h2 className="text-xs font-bold text-white uppercase tracking-wider">Acceso a su Universo</h2>
              </div>
              
              {loginError && (
                <div className="bg-[#800B1F]/30 border border-[#800B1F] text-white text-[11px] p-2 rounded-xl text-center font-bold">
                  {loginError}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono font-bold text-[#B1B9C5]">Usuario</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#B1B9C5]/60" />
                  <input 
                    type="text" 
                    placeholder="Judith Floow"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#07101B] border border-[#0B6B81] rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-[#B1B9C5]/40 focus:outline-none focus:border-[#800B1F]"
                  />
                </div>
              </div>

              <div className="space-y-1">
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

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#800B1F] to-[#5A0512] hover:opacity-95 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider mt-2"
              >
                Entrar al Mundo <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center pb-2 flex items-center justify-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isListening ? 'bg-[#10B981] animate-ping' : 'bg-[#800B1F]'}`}></span>
              <p className="text-[9px] text-[#B1B9C5]/60 font-mono">Di "FOREA" para activar asistente por voz</p>
            </div>
          </div>
        ) : null}

        {}
        <div className="bg-gradient-to-r from-[#0D2944] via-[#12506F] to-[#07101B] text-[#B1B9C5] px-6 pt-12 pb-5 rounded-b-[30px] shadow-md border-b border-[#0B6B81]/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] rounded-lg">
                <Dog className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-wider bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white px-2.5 py-0.5 rounded-full font-black font-mono">Judith Floow</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setPdfModalOpen(true)}
                className="flex items-center gap-1 bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white px-2 py-1 rounded-full text-[10px] font-bold shadow hover:opacity-90"
              >
                <Upload className="w-3 h-3" /> PDF
              </button>
              <button 
                onClick={() => setRemindersModalOpen(true)}
                className="flex items-center gap-1 bg-gradient-to-r from-[#12506F] to-[#0D2944] text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow hover:opacity-90 relative"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{reminders.filter(r => !r.done).length}</span>
              </button>
            </div>
          </div>
          
          <h1 className="text-lg font-black mt-2 text-white uppercase tracking-tight">El Mundo de Judith</h1>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[11px] text-[#B1B9C5]/80">Arquitectura • Nutrición • FOREA Voz</p>
            <div className="flex items-center gap-1 bg-[#07101B]/50 px-2 py-0.5 rounded-full">
              <Mic className={`w-3 h-3 ${isListening ? 'text-[#10B981] animate-pulse' : 'text-[#800B1F]'}`} />
              <span className="text-[9px] font-mono text-white">{isListening ? 'FOREA Escuchando' : 'Mic Off'}</span>
            </div>
          </div>
          
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'nutricion', label: '🥗 Nutrición' },
              { id: 'arquitectura', label: '📐 Arquitectura' },
              { id: 'perros', label: '🐾 Dog Lover' },
              { id: 'recordatorios', label: '⏰ Recordatorios' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCurrentCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
                  currentCategory === cat.id 
                    ? 'bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white shadow' 
                    : 'bg-[#07101B]/40 text-[#B1B9C5] hover:bg-[#0B6B81]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {currentCategory === 'nutricion' && currentTab === 'home' && (
            <div className="flex gap-2 mt-2 pt-2 border-t border-[#0B6B81]/50 overflow-x-auto pb-1 scrollbar-none">
              {Object.keys(recetasPorMes).map((mes) => (
                <button
                  key={mes}
                  onClick={() => { setSelectedMonth(mes); setActiveRecipeIndex(0); }}
                  className={`px-3 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap transition-all ${
                    selectedMonth === mes 
                      ? 'bg-white text-[#0D2944] shadow font-bold' 
                      : 'bg-[#07101B]/40 text-[#B1B9C5] hover:bg-[#0B6B81]'
                  }`}
                >
                  {recetasPorMes[mes].titulo}
                </button>
              ))}
            </div>
          )}
        </div>

        {}
        <div className="flex-1 overflow-y-auto p-4 pb-28 space-y-4 bg-[#B1B9C5]">
          
          {currentCategory === 'nutricion' && currentTab === 'home' && currentRecipe && (
            <div className="space-y-4 animate-fadeIn">
              
              <div className={`relative w-full h-[320px] rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-tr ${currentRecipe.colorBg} flex flex-col justify-between transition-all duration-500 transform hover:scale-[1.01] border-2 border-white/20`}>
                
                <div className="absolute inset-0 z-0">
                  <img src={currentRecipe.imagen} alt={currentRecipe.nombre} className="w-full h-full object-cover opacity-90 scale-105 transition-transform duration-700 hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101B]/95 via-[#07101B]/30 to-transparent"></div>
                </div>

                <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <div className="flex justify-between items-start z-10 p-5">
                  <span className="text-[10px] tracking-widest uppercase bg-black/50 text-white px-3 py-1 rounded-full font-bold backdrop-blur-md border border-white/20 shadow">
                    {currentRecipe.subtitulo}
                  </span>
                </div>

                <div className="z-10 p-5 pt-0 flex flex-col justify-end">
                  <h2 className="text-xl font-black text-white drop-shadow-lg mb-3 leading-tight">{currentRecipe.nombre}</h2>
                  
                  <div className="flex justify-between items-center bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 shadow-lg">
                    <button 
                      onClick={() => setActiveRecipeIndex(prev => (prev > 0 ? prev - 1 : allRecipesForMonth.length - 1))}
                      className="p-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all text-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-bold tracking-wider text-white font-mono">Receta {activeRecipeIndex + 1} de {allRecipesForMonth.length}</span>
                    <button 
                      onClick={() => setActiveRecipeIndex(prev => (prev < allRecipesForMonth.length - 1 ? prev + 1 : 0))}
                      className="p-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all text-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#07101B]/10">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xs font-black text-[#0D2944] uppercase tracking-wider">Storehouse & Ingredientes</h3>
                  <span className="text-[10px] bg-gradient-to-r from-[#12506F] to-[#0B6B81] text-white font-bold px-2.5 py-0.5 rounded-full font-mono">
                    {currentSelectedIngs.length} seleccionados
                  </span>
                </div>
                
                <p className="text-[11px] text-[#07101B]/60 mb-3">Toca un ingrediente para ver su peso exacto en gramos:</p>

                <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                  {currentRecipe.ingredientes.map((ing, idx) => {
                    const isSelected = currentSelectedIngs.includes(ing);
                    const gramosSimulados = (idx + 1) * 35 + 'g';
                    return (
                      <div 
                        key={idx}
                        onClick={() => toggleIngredientSelection(currentRecipe.id, ing)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isSelected 
                            ? 'bg-[#800B1F]/10 border-[#800B1F] text-[#800B1F] font-bold shadow-sm' 
                            : 'bg-[#B1B9C5]/30 border-transparent text-[#07101B] hover:bg-[#B1B9C5]/60'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium">{ing}</span>
                          {isSelected && (
                            <span className="bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white text-[10px] px-2 py-0.5 rounded-full font-black font-mono animate-pulse">
                              {gramosSimulados}
                            </span>
                          )}
                        </div>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                          isSelected ? 'bg-[#800B1F] border-[#800B1F] text-white' : 'border-[#07101B]/30'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-[#10B981] font-extrabold stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#07101B]/10 space-y-2">
                <h3 className="text-xs font-black text-[#0D2944] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0B6B81]" /> Preparación Arquitectónica
                </h3>
                <p className="text-xs text-[#07101B]/80 leading-relaxed bg-[#B1B9C5]/30 p-3 rounded-2xl">
                  {currentRecipe.prep}
                </p>
              </div>

            </div>
          )}

          {currentCategory === 'arquitectura' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-gradient-to-r from-[#0D2944] to-[#12506F] p-5 rounded-3xl text-white shadow-lg border border-[#0B6B81] space-y-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] rounded-xl text-white font-black">📐</span>
                  <h3 className="font-black text-sm uppercase tracking-wide">Estudio de Arquitectura Judith</h3>
                </div>
                <p className="text-xs text-[#B1B9C5]/90 leading-relaxed">
                  Diseño de espacios audaces, minimalistas e intelectuales. La geometría y la estructura aplicadas al estilo de vida.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#07101B]/10 space-y-2">
                  <div className="w-10 h-10 bg-[#800B1F]/10 text-[#800B1F] rounded-2xl flex items-center justify-center font-bold">01</div>
                  <h4 className="text-xs font-black text-[#07101B] uppercase">Concepto & Líneas</h4>
                  <p className="text-[11px] text-[#07101B]/70">Pureza en materiales, luz natural y volúmenes limpios.</p>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#07101B]/10 space-y-2">
                  <div className="w-10 h-10 bg-[#12506F]/10 text-[#12506F] rounded-2xl flex items-center justify-center font-bold">02</div>
                  <h4 className="text-xs font-black text-[#07101B] uppercase">Proyectos 2026</h4>
                  <p className="text-[11px] text-[#07101B]/70">Residencial vanguardista y espacios de bienestar.</p>
                </div>
              </div>
            </div>
          )}

          {currentCategory === 'perros' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-gradient-to-tr from-[#800B1F] to-[#5A0512] p-5 rounded-3xl text-white shadow-lg border border-white/20 space-y-3">
                <div className="flex items-center gap-2">
                  <Dog className="w-6 h-6 text-white" />
                  <h3 className="font-black text-sm uppercase tracking-wide">Dog Lover Corner</h3>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Espacio especial dedicado a los mejores amigos perrunos de Judith. Lealtad, alegría y compañía incondicional.
                </p>
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#07101B]/10 space-y-3">
                <h4 className="text-xs font-black text-[#0D2944] uppercase tracking-wider">🐾 Momentos con Perros</h4>
                <div className="space-y-2">
                  <div className="bg-[#B1B9C5]/40 p-3 rounded-2xl flex items-center justify-between">
                    <span className="text-xs font-bold text-[#07101B]">Paseo matutino y energía</span>
                    <span className="text-[10px] bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white px-2 py-0.5 rounded-full font-mono">Diario</span>
                  </div>
                  <div className="bg-[#B1B9C5]/40 p-3 rounded-2xl flex items-center justify-between">
                    <span className="text-xs font-bold text-[#07101B]">Zona de juegos y diseño</span>
                    <span className="text-[10px] bg-gradient-to-r from-[#12506F] to-[#0D2944] text-white px-2 py-0.5 rounded-full font-mono">Activo</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentCategory === 'recordatorios' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-gradient-to-r from-[#0D2944] to-[#12506F] p-5 rounded-3xl text-white shadow-lg border border-[#0B6B81] flex justify-between items-center">
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wide">Recordatorios de Hoy</h3>
                  <p className="text-[11px] text-[#B1B9C5]/80">{reminders.filter(r => !r.done).length} pendientes</p>
                </div>
                <button 
                  onClick={() => {
                    const pending = reminders.filter(r => !r.done);
                    const txt = pending.length > 0 ? `Tienes ${pending.length} pendientes: ` + pending.map(p => p.title).join(', ') : 'No tienes pendientes hoy.';
                    speakText(txt);
                  }}
                  className="bg-gradient-to-r from-[#800B1F] to-[#5A0512] hover:opacity-90 text-white p-3 rounded-2xl flex items-center gap-1.5 text-xs font-bold shadow transition-all"
                >
                  <Volume2 className="w-4 h-4" /> Leer Voz
                </button>
              </div>

              <form onSubmit={addReminder} className="bg-white p-4 rounded-3xl shadow-sm border border-[#07101B]/10 space-y-3">
                <h4 className="text-xs font-black text-[#0D2944] uppercase tracking-wider">Agregar Recordatorio</h4>
                <input 
                  type="text"
                  placeholder="Ej. Cita con cliente / Tomar Inositol..."
                  value={newReminderText}
                  onChange={(e) => setNewReminderText(e.target.value)}
                  className="w-full bg-[#B1B9C5]/30 border border-[#07101B]/10 rounded-xl p-3 text-xs text-[#07101B]"
                  required
                />
                <div className="flex gap-2">
                  <input 
                    type="text"
                    placeholder="Hora (Ej. 03:00 PM)"
                    value={newReminderTime}
                    onChange={(e) => setNewReminderTime(e.target.value)}
                    className="flex-1 bg-[#B1B9C5]/30 border border-[#07101B]/10 rounded-xl p-3 text-xs text-[#07101B]"
                  />
                  <button type="submit" className="bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white px-5 py-3 rounded-xl text-xs font-bold shadow uppercase">
                    Añadir
                  </button>
                </div>
              </form>

              <div className="space-y-2">
                {reminders.map((r) => (
                  <div 
                    key={r.id} 
                    onClick={() => toggleReminder(r.id)}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      r.done 
                        ? 'bg-[#12506F]/10 border-[#12506F]/40 text-[#07101B]/50 line-through' 
                        : 'bg-white border-[#07101B]/10 text-[#07101B] shadow-sm'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold">{r.title}</p>
                      <span className="text-[10px] text-[#12506F] font-mono">{r.time} • {r.category}</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      r.done ? 'bg-[#12506F] border-[#12506F] text-white' : 'border-[#07101B]/30'
                    }`}>
                      {r.done && <Check className="w-3 h-3 text-[#10B981] font-extrabold stroke-[3]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {}
          {currentTab === 'game' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-gradient-to-r from-[#0D2944] to-[#12506F] p-5 rounded-3xl text-white shadow-lg border border-[#0B6B81]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] rounded-2xl text-white shadow">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm uppercase tracking-wide">Calendario de Avance Diario</h3>
                    <p className="text-[11px] text-[#B1B9C5]/80">Completa tu dieta y marca tu progreso estructural.</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#0B6B81] flex justify-between text-xs font-mono text-[#B1B9C5]">
                  <span>Días cumplidos: <strong className="text-white">{totalCompletados}</strong></span>
                  <span>Meta mensual: <strong className="text-white">30 Días</strong></span>
                </div>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#07101B]">Julio / 2026 - Reto Arquitectónico</h4>
              
              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: 20 }, (_, i) => {
                  const dayNum = i + 1;
                  const fechaStr = `2026-07-${dayNum < 10 ? '0' + dayNum : dayNum}`;
                  const completado = diasCompletados[fechaStr] || false;

                  return (
                    <button
                      key={fechaStr}
                      onClick={() => toggleDiaCompletado(fechaStr)}
                      className={`p-3 rounded-2xl flex flex-col items-center justify-center transition-all relative ${
                        completado 
                          ? 'bg-gradient-to-br from-[#12506F] via-[#0B6B81] to-[#0D2944] text-white shadow-lg' 
                          : 'bg-white text-[#07101B] shadow-sm border border-[#07101B]/10'
                      }`}
                      style={completado ? {
                        boxShadow: '0 0 25px rgba(255, 10, 40, 1), inset 0 0 12px rgba(255, 10, 40, 0.7)',
                        border: '2px solid #FF1A38'
                      } : {}}
                    >
                      {completado && (
                        <div className="absolute inset-1 border border-white rounded-xl pointer-events-none" style={{ margin: '3px' }}></div>
                      )}
                      <span className="text-[9px] uppercase font-mono font-bold opacity-80">Día</span>
                      <span className="text-base font-black">{dayNum}</span>
                      {completado ? (
                        <CheckCircle2 className="w-5 h-5 mt-1 text-[#10B981] font-black animate-pulse" />
                      ) : (
                        <span className="w-3 h-3 mt-1 rounded-full border border-[#07101B]/30"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentTab === 'profile' && (
            <div className="space-y-4 animate-fadeIn text-center pt-4">
              <div className="w-20 h-20 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] text-white rounded-3xl rotate-3 flex items-center justify-center mx-auto text-2xl font-black shadow-xl">
                JF
              </div>
              <div>
                <h3 className="text-base font-black text-[#07101B] uppercase">{username || 'Judith Floow'}</h3>
                <p className="text-xs text-[#12506F] font-mono font-bold">Architect & Dog Lover</p>
              </div>
              
              <div className="bg-white p-4 rounded-3xl border border-[#07101B]/10 shadow-sm text-left space-y-2">
                <p className="text-xs font-black text-[#0D2944] uppercase tracking-wider">📐 El Universo de Judith:</p>
                <p className="text-xs text-[#07101B]/80 leading-relaxed">• Arquitectura, diseño y estructura.</p>
                <p className="text-xs text-[#07101B]/80 leading-relaxed">• Hidratación constante: 8 vasos de agua.</p>
                <p className="text-xs text-[#07101B]/80 leading-relaxed">• FOREA: Asistente virtual con activación por voz.</p>
              </div>

              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full bg-[#800B1F]/10 border border-[#800B1F] text-[#800B1F] font-bold py-3 rounded-xl text-xs hover:bg-[#800B1F]/20 transition-all mt-2"
              >
                Cerrar Sesión
              </button>
            </div>
          )}

        </div>

        {}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="bg-[#07101B]/95 backdrop-blur-md shadow-xl border border-[#0B6B81]/50 rounded-full px-3 py-2 flex justify-around items-center">
            
            <button 
              onClick={() => setCurrentTab('home')}
              className={`flex flex-col items-center transition-all ${currentTab === 'home' ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60 hover:text-white'}`}
            >
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5 font-mono">Home</span>
            </button>

            <button 
              onClick={() => setDrawerOpen(true)}
              className={`flex flex-col items-center transition-all ${currentCategory === 'nutricion' && drawerOpen ? 'text-[#12506F]' : 'text-[#B1B9C5]/60 hover:text-[#12506F]'}`}
              title="Directorio de Recetas"
            >
              <Salad className="w-5 h-5 text-[#12506F]" />
              <span className="text-[10px] font-bold mt-0.5 text-[#12506F] font-mono">Recetas</span>
            </button>

            <button 
              onClick={() => setPdfModalOpen(true)}
              className="bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white p-3 rounded-full shadow-lg shadow-[#800B1F]/50 hover:opacity-90 transition-transform active:scale-95 -mt-3 flex items-center justify-center border-2 border-[#07101B]"
            >
              <Plus className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setAiModalOpen(true)}
              className={`flex flex-col items-center transition-all ${aiModalOpen ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60 hover:text-[#800B1F]'}`}
              title="Asistente FOREA"
            >
              <Bot className="w-5 h-5 text-[#800B1F]" />
              <span className="text-[10px] font-bold mt-0.5 text-[#800B1F] font-mono">FOREA</span>
            </button>

            <button 
              onClick={() => setCurrentTab('game')}
              className={`flex flex-col items-center transition-all ${currentTab === 'game' ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60 hover:text-white'}`}
            >
              <Award className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5 font-mono">Reto</span>
            </button>

            <button 
              onClick={() => setCurrentTab('profile')}
              className={`flex flex-col items-center transition-all ${currentTab === 'profile' ? 'text-[#800B1F]' : 'text-[#B1B9C5]/60 hover:text-white'}`}
            >
              <User className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5 font-mono">Perfil</span>
            </button>

          </div>
        </div>

        {/* AI Assistant Modal */}
        {aiModalOpen && (
          <div className="absolute inset-0 bg-[#07101B]/80 backdrop-blur-md z-50 flex flex-col justify-end p-0 animate-fadeIn">
            <div className="bg-[#B1B9C5] w-full rounded-t-[30px] p-5 shadow-2xl h-[75vh] flex flex-col border-t-2 border-[#800B1F]">
              <div className="w-12 h-1.5 bg-[#07101B]/20 rounded-full mx-auto mb-3"></div>
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#07101B]/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-tr from-[#800B1F] to-[#5A0512] text-white rounded-xl shadow">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#07101B] uppercase">FOREA • Asistente de Voz</h3>
                    <p className="text-[10px] text-[#12506F] font-mono font-bold">Di "FOREA" para activar o escribe</p>
                  </div>
                </div>
                <button onClick={() => setAiModalOpen(false)} className="text-[#07101B]/70 hover:text-[#07101B] p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1 py-2">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white rounded-br-sm shadow' 
                        : 'bg-white text-[#07101B] border border-[#07101B]/10 rounded-bl-sm shadow-sm'
                    }`}>
                      <div className="flex justify-between items-start gap-2">
                        <span>{msg.text}</span>
                        {msg.sender === 'assistant' && (
                          <button 
                            onClick={() => speakText(msg.text)} 
                            className="text-[#800B1F] hover:scale-110 transition-transform shrink-0 mt-0.5"
                            title="Escuchar en voz alta"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isAiLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white text-[#07101B]/60 p-3 rounded-2xl text-xs italic animate-pulse shadow-sm">
                      FOREA consultando El Mundo de Judith...
                    </div>
                  </div>
                )}
              </div>

              <div className="my-1 flex gap-2">
                <button 
                  onClick={() => {
                    const pending = reminders.filter(r => !r.done);
                    const promptText = pending.length > 0 ? `Tengo ${pending.length} recordatorios pendientes: ` + pending.map(p => `${p.title} a las ${p.time}`).join(', ') : 'No tengo recordatorios pendientes.';
                    speakText(promptText);
                    setChatMessages(prev => [...prev, { sender: 'assistant', text: promptText }]);
                  }}
                  className="bg-gradient-to-r from-[#12506F] to-[#0D2944] text-[#B1B9C5] text-[10px] font-bold py-1.5 px-3 rounded-xl flex items-center gap-1.5 shadow"
                >
                  <Volume2 className="w-3.5 h-3.5 text-white" /> Preguntar por recordatorios pendientes
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="mt-2 pt-2 border-t border-[#07101B]/10 flex gap-2">
                <input 
                  type="text" 
                  placeholder="Di 'FOREA' o escribe aquí..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 bg-white border border-[#07101B]/20 rounded-xl px-4 py-3 text-xs text-[#07101B] placeholder-[#07101B]/40 focus:outline-none focus:border-[#800B1F]"
                />
                <button 
                  type="submit" 
                  disabled={isAiLoading}
                  className="bg-gradient-to-r from-[#800B1F] to-[#5A0512] hover:opacity-90 text-white p-3 rounded-xl shadow flex items-center justify-center transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Recipe Directory Drawer */}
        {drawerOpen && (
          <div className="absolute inset-0 bg-[#07101B]/70 backdrop-blur-sm z-50 flex items-end justify-center p-0 animate-fadeIn">
            <div className="bg-[#B1B9C5] w-full rounded-t-[30px] p-6 shadow-2xl max-h-[85vh] overflow-y-auto flex flex-col border-t-2 border-[#12506F]">
              <div className="w-12 h-1.5 bg-[#07101B]/20 rounded-full mx-auto mb-4"></div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-[#12506F] to-[#0D2944] text-white rounded-full">
                    <Salad className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-[#07101B] uppercase">Directorio El Mundo de Judith</h3>
                </div>
                <button onClick={() => setDrawerOpen(false)} className="text-[#07101B]/60 hover:text-[#07101B] p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                {Object.entries(recetasPorMes).map(([mesKey, mesData]) => (
                  <div key={mesKey} className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#12506F] to-[#0D2944] px-3 py-1.5 rounded-xl font-mono">
                      {mesData.titulo}
                    </h4>
                    <div className="space-y-2 pl-1">
                      {Object.entries(mesData.comidas).map(([, recetas]) => (
                        recetas.map((r) => (
                          <div 
                            key={r.id} 
                            onClick={() => {
                              setSelectedMonth(mesKey);
                              setCurrentCategory('nutricion');
                              setCurrentTab('home');
                              setDrawerOpen(false);
                            }}
                            className="bg-white hover:bg-[#12506F]/10 border border-[#07101B]/10 p-3 rounded-2xl cursor-pointer transition-all flex justify-between items-center shadow-sm"
                          >
                            <div>
                              <p className="text-xs font-bold text-[#07101B]">{r.nombre}</p>
                              <span className="text-[10px] text-[#12506F] font-semibold">{r.subtitulo}</span>
                            </div>
                            <span className="text-xs text-[#800B1F] font-black">Ver →</span>
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PDF Upload Modal */}
        {pdfModalOpen && (
          <div className="absolute inset-0 bg-[#07101B]/70 backdrop-blur-sm z-50 flex items-end justify-center p-0 animate-fadeIn">
            <div className="bg-[#B1B9C5] w-full rounded-t-[30px] p-6 shadow-2xl max-h-[85vh] overflow-y-auto border-t-2 border-[#800B1F]">
              <div className="w-12 h-1.5 bg-[#07101B]/20 rounded-full mx-auto mb-4"></div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#800B1F]" />
                  <h3 className="text-base font-black text-[#07101B] uppercase">Cargar PDF Mensual</h3>
                </div>
                <button onClick={() => setPdfModalOpen(false)} className="text-[#07101B]/70 hover:text-[#07101B]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {pdfMensajeExito && (
                <div className="bg-[#12506F] text-white p-3 rounded-xl text-xs font-bold text-center mb-3">
                  {pdfMensajeExito}
                </div>
              )}

              <form onSubmit={handlePdfUpload} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0D2944] uppercase mb-1">Nombre del Plan Mensual</label>
                  <input 
                    type="text" 
                    value={pdfTituloMes}
                    onChange={(e) => {
                      setPdfTituloMes(e.target.value);
                      setPdfMesNombre(e.target.value.toLowerCase().replace(/\s+/g, '-'));
                    }}
                    className="w-full bg-white border border-[#07101B]/20 rounded-xl p-3 text-xs text-[#07101B]"
                    placeholder="Ej. Plan Agosto 2026"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D2944] uppercase mb-1">Seleccionar Archivo PDF</label>
                  <div className="border-2 border-dashed border-[#07101B]/30 rounded-2xl p-6 text-center bg-white hover:border-[#800B1F] transition-all cursor-pointer relative">
                    <input 
                      type="file" 
                      accept=".pdf"
                      onChange={(e) => setPdfFile(e.target.files[0])}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Upload className="w-8 h-8 text-[#800B1F] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#07101B]">
                      {pdfFile ? pdfFile.name : 'Haz clic o arrastra tu PDF arquitectónico aquí'}
                    </p>
                    <p className="text-[10px] text-[#07101B]/60 mt-1">Se actualizará la app automáticamente con tus nuevas recetas</p>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={pdfSubiendo}
                  className="w-full bg-gradient-to-r from-[#800B1F] to-[#5A0512] text-white font-bold py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 text-xs uppercase"
                >
                  {pdfSubiendo ? 'Procesando PDF...' : 'Subir y Actualizar App'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}