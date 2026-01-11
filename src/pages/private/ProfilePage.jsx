import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserShield,
  FaEdit,
  FaCamera,
} from "react-icons/fa";

import alert from "../../utils/alert";
import useUser from "../../hooks/useUser";
import useAxios from "../../hooks/useAxios";
import Loader from "../../ui/shared/Loader";
import { uploadImage } from "../../services/imgbb";

const ProfilePage = () => {
  const axios = useAxios();
  const { user, isLoading, refetch } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  if (isLoading) return <Loader />;

  const openModal = () => {
    setValue("displayName", user.displayName);
    setValue("address", user.address);
    setValue("image", null);
    setIsModalOpen(true);
  };

  const onSubmit = async (data) => {
    try {
      let photoURL = user.photoURL;
      if (data.image && data.image.length > 0) {
        photoURL = await uploadImage(data.image[0]);
      }

      await axios.patch(`/users/${user._id}`, {
        displayName: data.displayName,
        address: data.address,
        photoURL,
      });

      alert.success("Profile Updated!", "Changes saved successfully.");
      setIsModalOpen(false);
      refetch();
    } catch (err) {
      alert.error("Update Failed", err.message || "Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Profile Header */}
      <div className="relative flex flex-col items-center group">
        <span className="absolute top-0 right-0 badge badge-primary shadow-md capitalize animate-pulse">
          {user.role}
        </span>

        <div className="relative transition-transform duration-500 hover:scale-105">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full w-40 h-40 object-cover border-4 border-primary shadow-lg"
          />
          <div
            className="absolute bottom-3 right-3 tooltip tooltip-right cursor-pointer"
            data-tip={user.status}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 border-base-100 ${
                user.status === "active"
                  ? "bg-success animate-bounce"
                  : "bg-error"
              }`}
            ></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mt-4 flex items-center gap-2">
          {user.displayName}
          <FaEdit
            className="text-primary cursor-pointer hover:scale-125 transition-transform active:rotate-12"
            onClick={openModal}
          />
        </h1>
      </div>

      <div className="divider" />

      {/* Profile Details - Kept original structure with subtle hover animations */}
      <div className="flex flex-col gap-4">
        {[
          { icon: null, label: "Status:", value: user.status, isStatus: true },
          {
            icon: <FaUserShield className="text-primary w-4" />,
            label: "Role:",
            value: user.role,
          },
          {
            icon: <FaEnvelope className="text-primary w-4" />,
            label: "Email:",
            value: user.email,
          },
          {
            icon: <FaMapMarkerAlt className="text-primary w-4" />,
            label: "Address:",
            value: user.address,
          },
          ...(user.role === "chef"
            ? [
                {
                  icon: <FaUserShield className="text-primary w-4" />,
                  label: "Chef ID:",
                  value: user._id,
                },
              ]
            : []),
          {
            icon: <FaCalendarAlt className="text-primary w-4" />,
            label: "Joined:",
            value: new Date(user.createdAt).toLocaleString(),
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="space-y-1 group/item transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex items-center gap-2">
              {item.isStatus ? (
                <span
                  className={`w-4 h-4 rounded-full ${
                    user.status === "active" ? "bg-success" : "bg-error"
                  }`}
                />
              ) : (
                item.icon
              )}
              <span className="font-semibold group-hover/item:text-primary transition-colors">
                {item.label}
              </span>
            </div>
            <span className="ml-6 block opacity-80">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Update Modal with smooth backdrop and entry */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-base-100 rounded-2xl p-6 w-full max-w-md shadow-2xl relative animate-in zoom-in-95 slide-in-from-top-4 duration-300">
            <h2 className="text-2xl font-black mb-6 border-b pb-2">
              Update Profile
            </h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-1">
                <label className="text-xs font-bold px-1 uppercase opacity-60">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("displayName", { required: "Name is required" })}
                  className="input input-bordered w-full focus:input-primary transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold px-1 uppercase opacity-60">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address", { required: "Address is required" })}
                  className="input input-bordered w-full focus:input-primary transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold px-1 uppercase opacity-60">
                  Profile Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image")}
                  className="file-input file-input-bordered w-full"
                />
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`btn btn-primary px-8 ${
                    isSubmitting ? "loading" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
