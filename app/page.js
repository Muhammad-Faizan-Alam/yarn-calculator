"use client";
import { useState } from "react";

export default function Page() {  // ✅ Capitalized function name
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("tex");
  const [converted, setConverted] = useState({ tex: 0, denier: 0, ne: 0, nm: 0 });

  const convertYarn = (val, fromUnit) => {
    let tex, denier, ne, nm;

    if (!val || isNaN(val)) {
      setConverted({ tex: 0, denier: 0, ne: 0, nm: 0 });
      return;
    }

    val = parseFloat(val);

    // Convert to Tex as base unit
    if (fromUnit === "tex") {
      tex = val;
    } else if (fromUnit === "denier") {
      tex = val / 9;
    } else if (fromUnit === "ne") {
      tex = 590.5 / val;
    } else if (fromUnit === "nm") {
      tex = 1000 / val;
    }

    // Convert Tex to other units
    denier = tex * 9;
    ne = 590.5 / tex;
    nm = 1000 / tex;

    setConverted({ tex, denier, ne, nm });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-5">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          🧵 Yarn Count Converter
        </h2>

        {/* Input Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Enter Value:</label>
          <input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              convertYarn(e.target.value, unit);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400 outline-none transition-all duration-200"
            placeholder="Enter yarn count"
          />
        </div>

        {/* Unit Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Select Unit:</label>
          <select
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
              convertYarn(value, e.target.value);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-blue-400 outline-none transition-all duration-200"
          >
            <option value="tex">Tex</option>
            <option value="denier">Denier (D)</option>
            <option value="ne">Cotton Count (Ne)</option>
            <option value="nm">Metric Count (Nm)</option>
          </select>
        </div>

        {/* Converted Values */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Converted Values:</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Tex", value: converted.tex, bg: "bg-blue-100" },
            { label: "Denier (D)", value: converted.denier, bg: "bg-green-100" },
            { label: "Cotton Count (Ne)", value: converted.ne, bg: "bg-yellow-100" },
            { label: "Metric Count (Nm)", value: converted.nm, bg: "bg-red-100" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <p className="text-gray-600 text-sm">{item.label}:</p>
              <p className="text-2xl font-bold">{item.value.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}