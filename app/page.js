'use client'
import { useState } from "react";

export default function page() {
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

    // Convert to Tex as a base unit
    if (fromUnit === "tex") {
      tex = val;
    } else if (fromUnit === "denier") {
      tex = val / 9;
    } else if (fromUnit === "ne") {
      tex = 590.5 / val;
    } else if (fromUnit === "nm") {
      tex = 1000 / val;
    }

    // Convert from Tex to all other units
    denier = tex * 9;
    ne = 590.5 / tex;
    nm = 1000 / tex;

    setConverted({ tex, denier, ne, nm });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🧵 Yarn Count Converter</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Enter Value:</label>
          <input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              convertYarn(e.target.value, unit);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
            placeholder="Enter yarn count"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Select Unit:</label>
          <select
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
              convertYarn(value, e.target.value);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-blue-400"
          >
            <option value="tex">Tex</option>
            <option value="denier">Denier (D)</option>
            <option value="ne">Cotton Count (Ne)</option>
            <option value="nm">Metric Count (Nm)</option>
          </select>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Converted Values:</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-blue-100 rounded-lg">
            <p className="text-gray-600 text-sm">Tex:</p>
            <p className="text-xl font-bold">{converted.tex.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <p className="text-gray-600 text-sm">Denier (D):</p>
            <p className="text-xl font-bold">{converted.denier.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg">
            <p className="text-gray-600 text-sm">Cotton Count (Ne):</p>
            <p className="text-xl font-bold">{converted.ne.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-red-100 rounded-lg">
            <p className="text-gray-600 text-sm">Metric Count (Nm):</p>
            <p className="text-xl font-bold">{converted.nm.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}